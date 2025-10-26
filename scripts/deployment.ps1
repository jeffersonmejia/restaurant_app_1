cls
$msg = Read-Host "Enter commit message"
git add .
git commit -m "$msg"
git pull origin main
git push origin main
npm run build
npm run deploy
