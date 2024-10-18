//問題
const question = [
    {
        q: "貝",
        a: ["あ", "さ", "り"]
    },
    {
        q: "動物",
        a: ["ア", "シ", "カ"]
    },
    {
        q: "動物",
        a: ["ア", "ヒ", "ル"]
    },
    {
        q: "動物",
        a: ["イ", "タ", "チ"]
    },
    {
        q: "哺乳類",
        a: ["イ", "ル", "カ"]
    },
    {
        q: "魚",
        a: ["イ", "ワ", "シ"]
    },
    {
        q: "鳥",
        a: ["イ", "ン", "コ"]
    },
    {
        q: "動物",
        a: ["ウ", "サ", "ギ"]
    },
    {
        q: "鳥",
        a: ["オ", "ウ", "ム"]
    },
    {
        q: "動物",
        a: ["カ", "エ", "ル"]
    },
    {
        q: "鳥",
        a: ["カ", "モ", "メ"]
    },
    {
        q: "鳥",
        a: ["カ", "ラ", "ス"]
    },
    {
        q: "動物",
        a: ["キ", "ツ", "ネ"]
    },
    {
        q: "動物",
        a: ["キ", "リ", "ン"]
    },
    {
        q: "海の生き物",
        a: ["ク", "ジ", "ラ"]
    },
    {
        q: "動物",
        a: ["コ", "ア", "ラ"]
    },
    {
        q: "動物",
        a: ["ゴ", "リ", "ラ"]
    },
    {
        q: "砂漠にいるらしい",
        a: ["サ", "ソ", "リ"]
    },
    {
        q: "貝",
        a: ["シ", "ジ", "ミ"]
    },
    {
        q: "鳥",
        a: ["ス", "ズ", "メ"]
    },
    {
        q: "動物",
        a: ["タ", "ヌ", "キ"]
    },
    {
        q: "鳥",
        a: ["ツ", "バ", "メ"]
    },
    {
        q: "爬虫類",
        a: ["ト", "カ", "ゲ"]
    },
    {
        q: "虫",
        a: ["ト", "ン", "ボ"]
    },
    {
        q: "ミッキーマウスのモデル",
        a: ["ネ", "ズ", "ミ"]
    },
    {
        q: "動物",
        a: ["パ", "ン", "ダ"]
    },
    {
        q: "北海道に生息",
        a: ["ヒ", "グ", "マ"]
    },
    {
        q: "動物",
        a: ["ヒ", "ツ", "ジ"]
    },
    {
        q: "動物",
        a: ["モ", "グ", "ラ"]
    },
    {
        q: "動物",
        a: ["ラ", "ク", "ダ"]
    },
    {
        q: "果物",
        a: ["イ", "チ", "ゴ"]
    },
    {
        q: "野菜",
        a: ["キ", "ノ", "コ"]
    },
    {
        q: "野菜",
        a: ["ゴ", "ボ", "ウ"]
    },
    {
        q: "花",
        a: ["サ", "ク", "ラ"]
    },
    {
        q: "果物",
        a: ["ス", "イ", "カ"]
    },
    {
        q: "花",
        a: ["ス", "ミ", "レ"]
    },
    {
        q: "野菜",
        a: ["セ", "ロ", "リ"]
    },
    {
        q: "果物",
        a: ["バ", "ナ", "ナ"]
    },
    {
        q: "果物",
        a: ["パ", "イ", "ン"]
    },
    {
        q: "果物",
        a: ["ブ", "ド", "ウ"]
    },
    {
        q: "果物",
        a: ["み", "か", "ん"]
    },
    {
        q: "秋の葉",
        a: ["も", "み", "じ"]
    },
    {
        q: "果物",
        a: ["り", "ん", "ご"]
    },
    {
        q: "酸っぱい",
        a: ["レ", "モ", "ン"]
    },
    {
        q: "辛い",
        a: ["わ", "さ", "び"]
    },
    {
        q: "身体",
        a: ["あ", "た", "ま"]
    },
    {
        q: "身体",
        a: ["お", "で", "こ"]
    },
    {
        q: "身体",
        a: ["お", "な", "か"]
    },
    {
        q: "身体",
        a: ["せ", "な", "か"]
    },
    {
        q: "身体",
        a: ["て", "く", "び"]
    },
    {
        q: "身体",
        a: ["ひ", "と", "み"]
    },
    {
        q: "身体",
        a: ["ほ", "く", "ろ"]
    },
    {
        q: "身体",
        a: ["ま", "つ", "げ"]
    },
    {
        q: "身体",
        a: ["ま", "ゆ", "げ"]
    },
    {
        q: "県",
        a: ["い", "わ", "て"]
    },
    {
        q: "県",
        a: ["み", "や", "ぎ"]
    },
    {
        q: "県",
        a: ["あ", "き", "た"]
    },
    {
        q: "県",
        a: ["と", "ち", "ぎ"]
    },
    {
        q: "県",
        a: ["ぐ", "ん", "ま"]
    },
    {
        q: "県",
        a: ["な", "が", "の"]
    },
    {
        q: "県",
        a: ["あ", "い", "ち"]
    },
    {
        q: "県",
        a: ["と", "や", "ま"]
    },
    {
        q: "県",
        a: ["ふ", "く", "い"]
    },
    {
        q: "県",
        a: ["し", "ま", "ね"]
    },
    {
       q: "県",
        a: ["か", "が", "わ"]
    },
    {
        q: "県",
        a: ["え", "ひ", "め"]
    },
    {
        q: "県",
        a: ["こ", "う", "ち"]
    },
    {
        q: "市",
        a: ["た", "じ", "み"]
    },
    {
        q: "市",
        a: ["な", "ご", "や"]
    },
    {
        q: "市",
        a: ["こ", "う", "べ"]
    },
    {
        q: "豆",
        a: ["あ", "ず", "き"]
    },
    {
        q: "野菜",
        a: ["お", "く", "ら"]
    },
    {
        q: "ダシをとる",
        a: ["こ", "ん", "ぶ"]
    },
    {
        q: "豆",
        a: ["だ", "い", "ず"]
    },
    {
        q: "野菜",
        a: ["ト", "マ", "ト"]
    },
    {
        q: "野菜",
        a: ["な", "す", "び"]
    },
    {
        q: "果物",
        a: ["メ", "ロ", "ン"]
    },
    {
        q: "野菜",
        a: ["も", "や", "し"]
    },
    {
        q: "野菜",
        a: ["レ", "タ", "ス"]
    },
    {
        q: "海藻",
        a: ["わ", "か", "め"]
    },
    {
        q: "小型観賞魚",
        a: ["メ", "ダ", "カ"]
    },
    {
        q: "冬に使う",
        a: ["こ", "た", "つ"]
    },
    {
        q: "写真を撮る",
        a: ["カ", "メ", "ラ"]
    },
    {
        q: "時間を見る",
        a: ["と", "け", "い"]
    },
    {
        q: "離れた人と話す",
        a: ["で", "ん", "わ"]
    },
    {
        q: "布地を縫う",
        a: ["ミ", "シ", "ン"]
    },
    {
        q: "電化製品",
        a: ["ラ", "ジ", "オ"]
    },
    {
        q: "電化製品",
        a: ["テ", "レ", "ビ"]
    },
    {
        q: "作物を育てる",
        a: ["は", "た", "け"]
    },
    {
        q: "冷たい",
        a: ["ア", "イ", "ス"]
    },
    {
        q: "寝具",
        a: ["ま", "く", "ら"]
    },
    {
        q: "寝具",
        a: ["ふ", "と", "ん"]
    },
    {
        q: "泊まる",
        a: ["ホ", "テ", "ル"]
    },
    {
        q: "風邪を引いたら飲む",
        a: ["く", "す", "り"]
    },
    {
        q: "スポーツ",
        a: ["ゴ", "ル", "フ"]
    },
    {
        q: "スポーツ",
        a: ["テ", "ニ", "ス"]
    },
    {
        q: "踊る",
        a: ["ダ", "ン", "ス"]
    },
    {
        q: "土俵の上で組み合う",
        a: ["す", "も", "う"]
    },
    {
        q: "雪山を滑る",
        a: ["ス", "キ", "ー"]
    },
    {
        q: "競走馬が走る",
        a: ["け", "い", "ば"]
    },
    {
        q: "フライパンにひく",
        a: ["あ", "ぶ", "ら"]
    },
    {
        q: "辛い",
        a: ["か", "ら", "し"]
    },
    {
        q: "甘い",
        a: ["さ", "と", "う"]
    },
    {
        q: "乳製品",
        a: ["バ", "タ", "ー"]
    },
    {
        q: "調味料",
        a: ["み", "り", "ん"]
    },
    {
        q: "色をつける",
        a: ["イ", "ン", "ク"]
    },
    {
        q: "絵に色をつける",
        a: ["え", "の", "ぐ"]
    },
    {
        q: "切る",
        a: ["ナ", "イ", "フ"]
    },
    {
        q: "切る",
        a: ["は", "さ", "み"]
    },
    {
        q: "書類に押す",
        a: ["は", "ん", "こ"]
    },
    {
        q: "お金を入れる",
        a: ["さ", "い", "ふ"]
    },
    {
        q: "丸い",
        a: ["タ", "イ", "ヤ"]
    },
    {
        q: "金　銀　銅",
        a: ["メ", "ダ", "ル"]
    },
    {
        q: "クリスマスに登場",
        a: ["サ", "ン", "タ"]
    },
    {
        q: "カラオケで使う",
        a: ["マ", "イ", "ク"]
    },
    {
        q: "色",
        a: ["み", "ど", "り"]
    },
    {
        q: "光る",
        a: ["ホ", "タ", "ル"]
    },
    {
        q: "食べ物",
        a: ["カ", "レ", "ー"]
    },
    {
        q: "お菓子",
        a: ["ゼ", "リ", "ー"]
    },
    {
        q: "踊る",
        a: ["バ", "レ", "エ"]
    },
    {
        q: "激しく吹く風",
        a: ["あ", "ら", "し"]
    },
    {
        q: "人工の歯",
        a: ["い", "れ", "ば"]
    },
    {
        q: "あおいで風をおこす",
        a: ["う", "ち", "わ"]
    },
    {
        q: "話せるとかっこいい",
        a: ["え", "い", "ご"]
    },
    {
        q: "王の子",
        a: ["お", "う", "じ"]
    },
    {
        q: "男性",
        a: ["お", "と", "こ"]
    },
    {
        q: "落ちた葉",
        a: ["お", "ち", "ば"]
    },
    {
        q: "成人",
        a: ["お", "と", "な"]
    },
    {
        q: "ダンス",
        a: ["お", "ど", "り"]
    },
    {
        q: "とても怖い",
        a: ["お", "ば", "け"]
    },
    {
        q: "親と子供",
        a: ["お", "や", "こ"]
    },
    {
        q: "女性",
        a: ["お", "ん", "な"]
    },
    {
        q: "子供を背負う",
        a: ["お", "ん", "ぶ"]
    },
    {
        q: "姿が映る",
        a: ["か", "が", "み"]
    },
    {
        q: "古い地層で発見",
        a: ["か", "せ", "き"]
    },
    {
        q: "花をさす",
        a: ["か", "び", "ん"]
    },
    {
        q: "スギやヒノキ",
        a: ["か", "ふ", "ん"]
    },
    {
        q: "端午の節句",
        a: ["か", "ぶ", "と"]
    },
    {
        q: "柑橘類",
        a: ["か", "ぼ", "す"]
    },
    {
        q: "札をとる",
        a: ["か", "る", "た"]
    },
    {
        q: "色",
        a: ["き", "い", "ろ"]
    },
    {
        q: "粉",
        a: ["き", "な", "こ"]
    },
    {
        q: "和服",
        a: ["き", "も", "の"]
    },
    {
        q: "問題に答える",
        a: ["ク", "イ", "ズ"]
    },
    {
        q: "無色透明",
        a: ["く", "う", "き"]
    },
];

//top画面
const scenetop = document.querySelector("#start");
//game画面
const scecegame = document.querySelector("#game");
//正解不正解表示画面
const next = document.querySelector("#next");
const field = document.querySelector("#field");
const select = document.querySelectorAll(".select");
const answer = document.querySelectorAll(".answer");

//選択された答えを順番に格納
let answers = [];
//問題番号を管理
let questionnum = 0;


init();
function init() {
    changescene(scecegame, scenetop);
    scenetop.addEventListener('click', gamestart, false);
}

function changescene(hiddenscene, visiblescene) {
    hiddenscene.classList.add("is-hidden");
    hiddenscene.classList.remove("is-visible");
    visiblescene.classList.add("is-visible");
}

function gamestart() {
    changescene(scenetop, scecegame);
    showQuestion()
}

// 【JavaScript】配列の要素をランダムに表示する(ブックマーク)を応用して追加
function shuffle(array) {
    for(let i = (question.length - 1); i > 0; i--) {
        const j = Math.floor(Math.random() * (i - 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// クイズ開始時に選択肢をシャッフル
shuffle(question);

//並べ替えクイズの処理
function showQuestion() {
    //答えを格納している配列を初期化
    answers.length = 0; 
    for (let i = 0; i < 3; i++) {
        answer[i].textContent = i + 1;
    }

    //問題の解答シャッフル Fisher–Yatesアルゴリズムを用いる
    //値渡しコピーで配列に代入
    let shufflea = question[questionnum].a.concat(); 
    for (let i = shufflea.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = shufflea[i];
        shufflea[i] = shufflea[r];
        shufflea[r] = tmp;
    }

    //問題文挿入
    document.querySelector("h1").textContent = question[questionnum].q;
    //回答選択肢挿入
    for (let i = 0; i < shufflea.length; i++) {
        select[i].classList.remove('is-hidden');
        select[i].textContent = shufflea[i];
    }

    let count = 0;
    //選択された答えを消す 
    for (let i = 0; i < shufflea.length; i++) {
        select[i].onclick = () => {
            console.log(count);
            select[i].classList.add('is-hidden');
            //選択された答えを移動
            answer[count].textContent = select[i].textContent;
            answers.push(answer[count].textContent);
            count += 1;
            if (count == shufflea.length) {
                count = 0;
                Judgment();
            }
        }
    }
}

//正解かどうか判定
function Judgment() {
    changescene(scecegame, next);
    if (JSON.stringify(question[questionnum].a) == JSON.stringify(answers)) {
        next.innerHTML = "<p style='font-size:5em;color:#008000;'>正解です！</p><button onclick='nextquestion()'>さぁ、次に進みましょう　　　　　　　　　　　　　　　　　　　　　　　　　　　　！！！！！！！</button>";

    } else {
        next.innerHTML = "<p style='font-size:5em;color:#008080;'>いいですね！</p><button onclick='nextquestion()'>さぁ、次に進みましょう　　　　　　　　　　　　　　　　　　　　　　　　　　　　！！！！！！！</button>";
    }
}

//次の問題ボタンが押された時の処理
function nextquestion() {
    questionnum++
    if (Object.keys(question).length > questionnum) {
        changescene(next, scecegame);
        showQuestion();
    } else {
        questionnum = 0;
        changescene(next, scecegame);
        showQuestion();
    }
}
