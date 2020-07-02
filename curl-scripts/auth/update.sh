API="https://secure-oasis-82523.herokuapp.com"
URL_PATH="/update"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \

echo
