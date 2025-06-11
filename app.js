const QUESTIONS = [
    {
        text: 'テーブルでは相手と会話して情報を探るのが得意だ',
        A: 'はい',
        B: 'むしろ黙って様子を見る',
        axis: 'EI',
        map: { A: 'E', B: 'I' }
    },
    {
        text: 'プレイ中、周囲の反応や空気を強く感じる',
        A: '影響を受けやすい',
        B: '自分の思考に集中する',
        axis: 'EI',
        map: { A: 'E', B: 'I' }
    },
    {
        text: 'アグレッシブに攻めて相手を動かすのが好き',
        A: '攻め派',
        B: '受けて観察派',
        axis: 'EI',
        map: { A: 'E', B: 'I' }
    },
    {
        text: '相手のプレイスタイルを分析する時…',
        A: '直近のハンド履歴やアクションパターンで分析',
        B: '顔つきやトーン、雰囲気から察する',
        axis: 'SN',
        map: { A: 'S', B: 'N' }
    },
    {
        text: 'あなたにとってポーカーは？',
        A: '数値・知識・再現性が鍵のゲーム',
        B: '心理戦・感性・読み合いの勝負',
        axis: 'SN',
        map: { A: 'S', B: 'N' }
    },
    {
        text: '場に自信のあるプレイヤーが複数いるとき、あなたは？',
        A: 'レンジをより固くし堅実に戦う',
        B: '相手を心理的に崩すプレイを狙う',
        axis: 'SN',
        map: { A: 'S', B: 'N' }
    },
    {
        text: 'リスクとリターンのバランスで合理的に判断する',
        A: '数字と効率重視',
        B: '感情や直感も大事',
        axis: 'TF',
        map: { A: 'T', B: 'F' }
    },
    {
        text: '負けても冷静に次の判断に活かす',
        A: '反省→修正できる',
        B: '気持ちの切り替えを大事にする',
        axis: 'TF',
        map: { A: 'T', B: 'F' }
    },
    {
        text: '相手に好かれるより勝つことを重視',
        A: '勝ち最優先',
        B: '雰囲気も大切にしたい',
        axis: 'TF',
        map: { A: 'T', B: 'F' }
    },
    {
        text: '自分の戦略を決めてからプレイする',
        A: '最初にプランあり',
        B: '流れで決める',
        axis: 'JP',
        map: { A: 'J', B: 'P' }
    },
    {
        text: '想定外のプレイヤーに出会ったときは？',
        A: '自分の型を保ちながら工夫する',
        B: '柔軟にスタイルごと変える',
        axis: 'JP',
        map: { A: 'J', B: 'P' }
    },
    {
        text: '相手のアクションが予想外でも柔軟に対応できる',
        A: 'あまり好きじゃない',
        B: 'むしろ楽しい',
        axis: 'JP',
        map: { A: 'J', B: 'P' }
    }
];

const RESULT_INFO = {
    INTJ: {
        label: '戦略家',
        desc: '長期的な戦略を立て、冷静な判断で勝利を掴む計画的なプレイヤー。相手の行動パターンを分析し、最適なタイミングで仕掛けます。'
    },
    INTP: {
        label: '論理学者',
        desc: '論理的思考で状況を精査し、数学的確率に基づいて判断するアナリスト。静かに観察しながら、理論的に最適解を導き出します。'
    },
    ENTJ: {
        label: '指揮官',
        desc: '積極的にゲームをコントロールし、強いリーダーシップで場を支配するプレイヤー。大胆な戦略で相手を圧倒します。'
    },
    ENTP: {
        label: '革新者',
        desc: '創造的なブラフと予想外の戦術で相手を翻弄する革新者。柔軟な発想で常に新しいアプローチを試みます。'
    },
    INFJ: {
        label: '洞察者',
        desc: '相手の心理を深く読み取り、直感的な判断で勝負を決める洞察力のあるプレイヤー。長期的な視点で戦略を練ります。'
    },
    INFP: {
        label: '調和者',
        desc: '自分の価値観に基づいてプレイし、相手との調和も大切にする平和主義者。感情豊かで創造的なアプローチを取ります。'
    },
    ENFJ: {
        label: '魅力者',
        desc: '人間関係を重視しながらも勝利を目指す、カリスマ性のあるプレイヤー。相手の感情を読み取り、適切なタイミングで行動します。'
    },
    ENFP: {
        label: '冒険家',
        desc: '情熱的で創造的なプレイスタイルで、予測不可能な動きを見せる自由奔放なプレイヤー。直感を信じて大胆な勝負に出ます。'
    },
    ISTJ: {
        label: '守護者',
        desc: '堅実で規律正しいプレイスタイルを貫く、信頼性の高いプレイヤー。基本に忠実で、確実な戦略を好みます。'
    },
    ISFJ: {
        label: '支援者',
        desc: '慎重で思いやりのあるプレイスタイルで、相手を尊重しながらも自分の目標を達成する優しいプレイヤー。'
    },
    ESTJ: {
        label: '実務家',
        desc: '効率的で組織的なアプローチでゲームを管理し、確実な勝利を追求する実務家タイプのプレイヤー。'
    },
    ESFJ: {
        label: '調整者',
        desc: '社交的で協調性があり、楽しい雰囲気を作りながらも勝負には真剣に取り組む、バランスの取れたプレイヤー。'
    },
    ISTP: {
        label: '職人',
        desc: '冷静で実用的なアプローチを取り、状況に応じて柔軟に戦術を変える職人気質のプレイヤー。無駄のない効率的なプレイが特徴。'
    },
    ISFP: {
        label: '芸術家',
        desc: '独自の美学に基づいてプレイし、芸術的で個性的なアプローチを取る創造性豊かなプレイヤー。'
    },
    ESTP: {
        label: '勝負師',
        desc: '大胆で行動力があり、リスクを恐れずに積極的に勝負を仕掛ける、エキサイティングなプレイヤー。'
    },
    ESFP: {
        label: '楽天家',
        desc: '楽しさを重視し、周囲を盛り上げながらも自然体でプレイする、魅力的で社交的なプレイヤー。'
    }
};

class PokerMBTIDiagnosis {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.showScreen('start-screen');
    }

    bindEvents() {
        document.getElementById('start').addEventListener('click', () => this.startDiagnosis());
        document.getElementById('answer-a').addEventListener('click', () => this.selectAnswer('A'));
        document.getElementById('answer-b').addEventListener('click', () => this.selectAnswer('B'));
        document.getElementById('retry').addEventListener('click', () => this.restart());
        document.getElementById('share').addEventListener('click', () => this.shareResult());
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    startDiagnosis() {
        this.currentQuestion = 0;
        this.answers = [];
        this.showScreen('question-screen');
        this.displayQuestion();
    }

    displayQuestion() {
        const question = QUESTIONS[this.currentQuestion];
        if (!question) {
            this.showResult();
            return;
        }
        
        const questionText = this.sanitizeText(question.text);
        const answerA = this.sanitizeText(question.A);
        const answerB = this.sanitizeText(question.B);
        
        document.getElementById('question-text').textContent = `Q${this.currentQuestion + 1}. ${questionText}`;
        document.getElementById('answer-a').textContent = answerA;
        document.getElementById('answer-b').textContent = answerB;
        
        this.updateProgress();
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / QUESTIONS.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${this.currentQuestion + 1}/${QUESTIONS.length}`;
    }

    selectAnswer(answer) {
        if (answer !== 'A' && answer !== 'B') {
            console.error('Invalid answer:', answer);
            return;
        }
        
        const question = QUESTIONS[this.currentQuestion];
        if (!question || !question.map || !question.map[answer]) {
            console.error('Invalid question or answer mapping');
            return;
        }
        
        this.answers.push({
            axis: question.axis,
            type: question.map[answer]
        });

        this.currentQuestion++;

        if (this.currentQuestion < QUESTIONS.length) {
            this.displayQuestion();
        } else {
            this.showResult();
        }
    }

    calculateMBTI() {
        const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        
        this.answers.forEach(answer => {
            counts[answer.type]++;
        });
        
        const mbti = [
            counts.E >= counts.I ? 'E' : 'I',
            counts.S >= counts.N ? 'S' : 'N',
            counts.T >= counts.F ? 'T' : 'F',
            counts.J >= counts.P ? 'J' : 'P'
        ].join('');
        
        return mbti;
    }

    showResult() {
        const mbtiType = this.calculateMBTI();
        const result = RESULT_INFO[mbtiType];
        
        if (!result) {
            console.error('Invalid MBTI type:', mbtiType);
            return;
        }
        
        document.getElementById('result-type').textContent = this.sanitizeText(mbtiType);
        document.getElementById('result-label').textContent = this.sanitizeText(result.label);
        document.getElementById('result-description').textContent = this.sanitizeText(result.desc);
        
        this.showScreen('result-screen');
    }

    restart() {
        this.currentQuestion = 0;
        this.answers = [];
        this.showScreen('start-screen');
    }

    async shareResult() {
        const mbtiType = document.getElementById('result-type').textContent;
        const label = document.getElementById('result-label').textContent;
        const description = document.getElementById('result-description').textContent;
        
        const resultText = `私のポーカースタイル診断結果は「${mbtiType} - ${label}」でした！\n\n${description}\n\n#ポーカーMBTI診断`;
        
        try {
            await navigator.clipboard.writeText(resultText);
            this.showCopyNotification();
        } catch (err) {
            console.error('コピーに失敗しました:', err);
            alert('コピーに失敗しました。');
        }
    }

    sanitizeText(text) {
        if (typeof text !== 'string') return '';
        return text.replace(/[<>&"']/g, function(match) {
            const escapeMap = {
                '<': '&lt;',
                '>': '&gt;',
                '&': '&amp;',
                '"': '&quot;',
                "'": '&#x27;'
            };
            return escapeMap[match];
        });
    }

    validateInput(input) {
        return input && typeof input === 'string' && input.length <= 1000;
    }

    showCopyNotification() {
        const notification = document.getElementById('copy-notification');
        if (!notification) return;
        
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PokerMBTIDiagnosis();
});