API="https://secure-oasis-82523.herokuapp.com"
URL_PATH="/create"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
