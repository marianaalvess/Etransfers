$filePath = "c:/Users/RC71/Documents/etranfers.pt/script.js"
$content = Get-Content $filePath -Raw -Encoding UTF8

# Replace the French Fatima description
$oldPattern = 'route_6_desc: ".*?L''un des plus grands centres de pèlerinage marial au monde !"'
$newText = 'route_6_desc: "L''un des plus grands centres de pèlerinage marial au monde, le Sanctuaire de Fátima reçoit des millions de visiteurs chaque année, étant aujourd''hui un lieu de foi, de réflexion et de profonde dévotion."'

$content = $content -replace $oldPattern, $newText

# Write back
$content | Set-Content $filePath -Encoding UTF8 -NoNewline

Write-Host "French Fatima translation updated successfully!"
