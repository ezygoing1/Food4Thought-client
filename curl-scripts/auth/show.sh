API="https://secure-oasis-82523.herokuapp.com"
URL_PATH="/show"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
