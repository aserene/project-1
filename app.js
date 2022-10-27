// https://cdn.contentful.com
// Space ID: j5z000zxhdfh
// access token: lpW7spZ1knrCfM4NsWxxPhXKG2oU8FdGctTx4T46yUE

//spaces/{space_id}/environments/{environment_id}/entries?access_token={access_token}&content_type={content_type}
const state = {
    player1: 0,
    player2: 0,
    currentQ: {},
    which: true
}
let questions = []

const $question = $(".question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1score = $(".player1 h4")
const $p2score = $(".player2 h4")

const chooseAnswer = (event, question) => {
    console.log(event)
    if(event.target.innerText === question.correctAnswer){
        console.log("correct")
        if(state.which) {
            state.player1++
            state.which = !state.which
        } else {
            state.player2++
            state.which = !state.which
        }
        setBoard(questions)
    } else {
        console.log("incorrect")
        setBoard(questions)
        state.which = !state.which
    }
}

const setBoard = (q) => {
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c) 
    $d.text(randomQuestion.d) 

    $p1score.text(state.player1) 
    $p2score.text(state.player2)

    $("li").off()
    $("li").on("click", (event) => {
        chooseAnswer(event, randomQuestion)
    })
}
const URL  = "https://cdn.contentful.com/spaces/j5z000zxhdfh/environments/master/entries?access_token=lpW7spZ1knrCfM4NsWxxPhXKG2oU8FdGctTx4T46yUE&content_type=triviaQ"
$.ajax(URL)
.then((data) => {
  questions = data.items.map((q) => q.fields)
  console.log(data)
  console.log(questions)

  setBoard(questions)
})
