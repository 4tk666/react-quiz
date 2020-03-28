import React from 'react';
import Timer from  '../components/timer'
const data = [
  { questionTitle: "オードリーはリスナーのことを何と呼ぶ？",
    answerNumber: 2,
    answers: ["ビッグトゥース","リトルトゥース","スモールトゥース","ミドルトゥース"]
  },
  { questionTitle: "春日の奥様の名前は？",
    answerNumber: 1,
    answers: ["クミさん","ナオさん","エミさん","マオさん"]
  },
  { questionTitle: "春日の父親の名前は？",
    answerNumber: 3,
    answers:["ヒデアキ","ナオアキ","ノリアキ","トシヒデ"]
  },
  { questionTitle: "オードリーがM-1グランプリ出演時のエントリーナンバーは？",
    answerNumber: 1,
    answers:["4431","4432","4421","4422"]
  },
  { questionTitle: "サトミツが推している日向坂メンバーは？",
    answerNumber: 1,
    answers: ["上村ひなの","小坂奈緒","加藤史帆","丹生明里"]
  },
  { questionTitle: "ハライチ澤部はビデオボックスに何時間滞在する？",
    answerNumber: 4,
    answers:["3時間","6時間","9時間","12時間" ]
  },
  { questionTitle: "オードリーのオールナイトニッポン10周年全国ツアーで楽曲を提供したCreepy Nutsの二人。R-指定と誰？",
    answerNumber: 3,
    answers: ["DJ吉永","DJ家永","DJ松永","DJ友永"]},
  { questionTitle: "ラジオにも出演した二人の同級生の名前は？",
    answerNumber: 2,
    answers:["田口","谷口","小口","井口"]
  },
  { questionTitle: "春日の飼っている犬の名前は？",
    answerNumber: 4,
    answers: ["キャキャ","シャシャ","ジャジャ","チャチャ"]
  },
  { questionTitle: "オードリー所属している事務所は?",
    answerNumber: 3,
    answers:["ケイダッシュ","人力舎","ケイダッシュステージ","太田プロ"]
  },
]
const ranDataNum = () => {
  return Math.floor( Math.random() * data.length );
}
const ranQuestionData = () =>{
  return data[ranDataNum()];
}
const aaa = ranQuestionData()
class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionTitle: aaa.questionTitle,
      answers: aaa.answers,
      answerNumber: aaa.answerNumber,
      score: 0
    }
  }
  scoreUp = (e) => {
    const choiceNumber = e.target.getAttribute("target");
    const choiceNumberInt = parseFloat(choiceNumber);
    if(this.state.answerNumber === choiceNumberInt){
      this.setState ({
        score: this.state.score + 10
      });
    }
    this.questionChange();
  }
  questionChange = () => {
    const bbb = ranQuestionData()
    this.setState ({
      questionTitle: bbb.questionTitle,
      answers: bbb.answers,
      answerNumber: bbb.answerNumber,
    });
  }
  render(){
    return(
      <React.Fragment>
        <div className="modal-list">
          <div>
            <div className="quiz-title-timer">
              <div>{this.state.questionTitle}</div>
              <Timer questionChange={this.questionChange}/>
            </div>
            <div>{this.state.score}</div>
            <ul className="choice-list">
              {this.state.answers.map((answer,i) =>(
                <li className="choice-item" key={i} onClick={this.scoreUp} target={i+1}><span className="choice-number">{i+1}</span>{answer}</li>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Quiz;