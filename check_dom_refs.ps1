<#
  check_dom_refs.ps1
  Scans HTML and JS files under the project root (parent of this script) for
  `document.getElementById('...')` / `document.getElementById("...")` references
  and reports IDs that are referenced but not present as `id="..."` in any HTML.
#>

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$projectRoot = Resolve-Path (Join-Path $scriptDir '..')

Write-Host "Scanning project:" $projectRoot

$files = Get-ChildItem -Path $projectRoot -Include *.html,*.js -File -Recurse -ErrorAction SilentlyContinue
if (!$files) { Write-Host "No .html or .js files found."; exit 0 }

$presentIds = New-Object System.Collections.Generic.HashSet[string]
$referencedIds = New-Object System.Collections.Generic.HashSet[string]

foreach ($f in $files) {
  $text = Get-Content -Raw -Path $f.FullName -ErrorAction SilentlyContinue
  if ($f.Extension -ieq '.html') {
    $matches = [regex]::Matches($text, 'id\s*=\s*"([^"]+)"')
    foreach ($m in $matches) { $presentIds.Add($m.Groups[1].Value) | Out-Null }
  }
  # find document.getElementById('id') and with double-quotes
  $m1 = [regex]::Matches($text, "document\.getElementById\(\s*'([^']+)'\s*\)")
  foreach ($m in $m1) { $referencedIds.Add($m.Groups[1].Value) | Out-Null }
  $m2 = [regex]::Matches($text, 'document\.getElementById\(\s*"([^\"]+)"\s*\)')
  foreach ($m in $m2) { $referencedIds.Add($m.Groups[1].Value) | Out-Null }
}

$missing = @()
foreach ($id in $referencedIds) { if (-not $presentIds.Contains($id)) { $missing += $id } }

Write-Host "Found HTML IDs:" $presentIds.Count
Write-Host "Found getElementById references:" $referencedIds.Count

if ($missing.Count -eq 0) {
  Write-Host "`n✅ No missing element IDs detected." -ForegroundColor Green
  exit 0
} else {
  Write-Host "`n❌ Missing element IDs (referenced but not present in any HTML):" -ForegroundColor Red
  foreach ($m in $missing) { Write-Host " - $m" }
  Write-Host "`nPlease add the missing elements to your HTML or remove the references." -ForegroundColor Yellow
  exit 2
}
