API="https://secure-oasis-82523.herokuapp.com"
URL_PATH="/index"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
