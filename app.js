// https://cdn.contentful.com
// Space ID: j5z000zxhdfh
// access token: lpW7spZ1knrCfM4NsWxxPhXKG2oU8FdGctTx4T46yUE

//spaces/{space_id}/environments/{environment_id}/entries?access_token={access_token}&content_type={content_type}

const URL  = "https://cdn.contentful.com/spaces/j5z000zxhdfh/environments/master/entries?access_token=lpW7spZ1knrCfM4NsWxxPhXKG2oU8FdGctTx4T46yUE&content_type=triviaQ"
$.ajax(URL)
.then((data) => {
  console.log(data)
})