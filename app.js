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
        desc: '長期的な戦略を立て、冷静な判断で勝利を掴む計画的なプレイヤー。相手の行動パターンを分析し、最適なタイミングで仕掛けます。',
        features: '戦略的、冷静、長期視点、数学的分析',
        tells: '表情が読めない、沈黙多い',
        weaknesses: '柔軟性不足、感情無視、自信過剰',
        dislikedPlay: '予測不能なプレイ、感情的ブラフ'
    },
    INTP: {
        label: '論理学者',
        desc: '論理的思考で状況を精査し、数学的確率に基づいて判断するアナリスト。静かに観察しながら、理論的に最適解を導き出します。',
        features: '理論家、好奇心旺盛、効率重視',
        tells: '小声で独り言、目線泳ぐ、長考',
        weaknesses: '考えすぎて行動遅れ、理論へのこだわり',
        dislikedPlay: 'テンポ速、強気なレイズ、無計画'
    },
    ENTJ: {
        label: '指揮官',
        desc: '積極的にゲームをコントロールし、強いリーダーシップで場を支配するプレイヤー。大胆な戦略で相手を圧倒します。',
        features: '主導的、論理的、強気、決断力',
        tells: '強気な発言、他者に指示、攻撃的',
        weaknesses: '他者の感情を軽視、焦り、相手への過信',
        dislikedPlay: '感情を揺さぶる、ゆったり消極的プレイ'
    },
    ENTP: {
        label: '革新者',
        desc: '創造的なブラフと予想外の戦術で相手を翻弄する革新者。柔軟な発想で常に新しいアプローチを試みます。',
        features: '発想力、即興型、陽気、混乱させる',
        tells: 'ジョーク、よく喋る、相手の反応を伺う',
        weaknesses: 'プラン無し、過度なブラフ、集中散漫',
        dislikedPlay: 'タイトな相手、理詰め展開、単調プレイ'
    },
    INFJ: {
        label: '洞察者',
        desc: '相手の心理を深く読み取り、直感的な判断で勝負を決める洞察力のあるプレイヤー。長期的な視点で戦略を練ります。',
        features: '直感、深読み、洞察力、心理を読む',
        tells: '沈黙＋深呼吸、一人分析、視線が泳ぐ',
        weaknesses: '直感の迷信、感情的ストレス',
        dislikedPlay: '無表情プレイ、攻撃的プレイ'
    },
    INFP: {
        label: '調和者',
        desc: '自分の価値観に基づいてプレイし、相手との調和も大切にする平和主義者。感情豊かで創造的なアプローチを取ります。',
        features: '理想主義、直感型、繊細',
        tells: '首をひねる、うなずく、目線が泳ぐ',
        weaknesses: '感情で判断しがち',
        dislikedPlay: '理詰め展開、ルース攻撃的'
    },
    ENFJ: {
        label: '魅力者',
        desc: '人間関係を重視しながらも勝利を目指す、カリスマ性のあるプレイヤー。相手の感情を読み取り、適切なタイミングで行動します。',
        features: '共感力、社交的、感情重視',
        tells: '他者を気遣う発言、身振り手振り大',
        weaknesses: '感情に左右、損切り遅、ブラフ打つの苦手',
        dislikedPlay: '冷静無表情、不愉快な言動、攻撃的'
    },
    ENFP: {
        label: '冒険家',
        desc: '情熱的で創造的なプレイスタイルで、予測不可能な動きを見せる自由奔放なプレイヤー。直感を信じて大胆な勝負に出ます。',
        features: '社交的、柔軟、情熱的、好奇心',
        tells: '動作派手、喋り多、笑顔多い',
        weaknesses: '理論軽視、即興、感情判断、集中力欠如',
        dislikedPlay: 'ロジカルな抑制、無表情プレイ'
    },
    ISTJ: {
        label: '守護者',
        desc: '堅実で規律正しいプレイスタイルを貫く、信頼性の高いプレイヤー。基本に忠実で、確実な戦略を好みます。',
        features: '堅実、慎重、論理的、秩序',
        tells: '手を揃える、チップ整える',
        weaknesses: '相手を読めない、柔軟性低、ブラフ少',
        dislikedPlay: '変則プレイ、強気なプレッシャー'
    },
    ISFJ: {
        label: '支援者',
        desc: '慎重で思いやりのあるプレイスタイルで、相手を尊重しながらも自分の目標を達成する優しいプレイヤー。',
        features: '実直、忠実、サポート型',
        tells: '小さく頷く、微笑む、控えめなベット',
        weaknesses: '受け身で主導権無し、ブラフ苦手',
        dislikedPlay: '激しい攻め、ブラフ連発'
    },
    ESTJ: {
        label: '実務家',
        desc: '効率的で組織的なアプローチでゲームを管理し、確実な勝利を追求する実務家タイプのプレイヤー。',
        features: '管理力、実行力、現実的',
        tells: '手元の整頓、声が安定、指示口調、攻撃的',
        weaknesses: 'アジャスト苦手、攻めがパターン化',
        dislikedPlay: '読み合い重視の心理戦、非効率ベット'
    },
    ESFJ: {
        label: '調整者',
        desc: '社交的で協調性があり、楽しい雰囲気を作りながらも勝負には真剣に取り組む、バランスの取れたプレイヤー。',
        features: '協調型、親しみ、思いやり',
        tells: '相槌多、相手の目を見る',
        weaknesses: '感情を鵜呑み、周囲の意見に流される',
        dislikedPlay: '静かなテーブル、攻撃的プレイ、無表情無言'
    },
    ISTP: {
        label: '職人',
        desc: '冷静で実用的なアプローチを取り、状況に応じて柔軟に戦術を変える職人気質のプレイヤー。無駄のない効率的なプレイが特徴。',
        features: '反応鋭い、観察力、冷静、適応力高',
        tells: '鋭い視線、無口、慎重',
        weaknesses: '感情に無関心、長期設計苦手、退屈に弱い',
        dislikedPlay: '多弁、過度なブラフ、論理押し付け'
    },
    ISFP: {
        label: '芸術家',
        desc: '独自の美学に基づいてプレイし、芸術的で個性的なアプローチを取る創造性豊かなプレイヤー。',
        features: '感覚型、繊細、感情直観',
        tells: '目線優しい、微笑多、感情が出る',
        weaknesses: '感受性高すぎ、感情の揺れ、ブラフ少',
        dislikedPlay: '理論型の攻め、強打'
    },
    ESTP: {
        label: '勝負師',
        desc: '大胆で行動力があり、リスクを恐れずに積極的に勝負を仕掛ける、エキサイティングなプレイヤー。',
        features: '大胆、反射神経、直感、刺激好き',
        tells: 'リアクション大、体が動く、チップ操作頻繁',
        weaknesses: '無謀なブラフ、リスク過多、長期計画難',
        dislikedPlay: '粘る相手、ブラフコール、タイトプレイ'
    },
    ESFP: {
        label: '楽天家',
        desc: '楽しさを重視し、周囲を盛り上げながらも自然体でプレイする、魅力的で社交的なプレイヤー。',
        features: 'エンタメ型、反応重視、陽気',
        tells: '大声、身振り多い、笑い',
        weaknesses: '判断甘い、集中欠如',
        dislikedPlay: '沈黙、堅実型の相手'
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
        document.getElementById('share').addEventListener('click', () => this.shareResult());
        document.getElementById('back-to-types').addEventListener('click', () => this.goBackToTypes());
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
        document.getElementById('result-features').textContent = this.sanitizeText(result.features);
        document.getElementById('result-tells').textContent = this.sanitizeText(result.tells);
        document.getElementById('result-weaknesses').textContent = this.sanitizeText(result.weaknesses);
        document.getElementById('result-disliked-play').textContent = this.sanitizeText(result.dislikedPlay);
        
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
    
    goBackToTypes() {
        window.open('https://sites.google.com/knowthyself.games/nekonosyukai/16%E3%82%BF%E3%82%A4%E3%83%97%E3%81%AE%E3%83%97%E3%83%AC%E3%82%A4%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB', '_blank');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PokerMBTIDiagnosis();
});