API="https://secure-oasis-82523.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
