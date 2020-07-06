API="https://secure-oasis-82523.herokuapp.com"
URL_PATH="/review"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "review": {
      "name": "'"${NAME}"'",
      "cuisine": "'"${CUISINE}"'",
      "currentLocation": "'"${LOC}"'",
      "review": "'"${REVIEW}"'"

    }
  }'

echo
