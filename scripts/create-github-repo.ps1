$input = "protocol=https`nhost=github.com`n`n"
$cred = ($input | git credential fill) -join "`n"
$token = [regex]::Match($cred, '(?m)^password=(.+)$').Groups[1].Value
if (-not $token) { throw 'GitHub token not found in credential helper' }

$headers = @{
  Authorization = "Bearer $token"
  Accept        = 'application/vnd.github+json'
  'X-GitHub-Api-Version' = '2022-11-28'
}

$body = @{
  name        = 'layerai-docs'
  description = 'LayerAI browser extension Mintlify docs'
  private     = $false
  auto_init   = $false
} | ConvertTo-Json

try {
  $result = Invoke-RestMethod -Method Post -Uri 'https://api.github.com/user/repos' -Headers $headers -Body $body -ContentType 'application/json'
  Write-Output "CREATED $($result.full_name)"
} catch {
  if ($_.Exception.Response.StatusCode.value__ -eq 422) {
    Write-Output 'EXISTS layerai-docs'
  } else {
    throw
  }
}
