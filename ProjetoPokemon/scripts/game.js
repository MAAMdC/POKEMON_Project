
// ITW, Ano Letivo 2020/2021

// Grupo: 14, Número: 52975, Nome: Miguel Caras-Altas, PL: 23
// Grupo: 14, Número: 56906, Nome: Miguel Castro, PL: 23
// Grupo: 14, Número: 48207, Nome: Nuno Sousa, PL: 23



// Constantes úteis e valores iniciais do sessionStorage

sessionStorage.setItem('frame', 0);

sessionStorage.setItem('battle', null);

sessionStorage.setItem('difficulty', 2);

const welcomeMsg = ['Nice to meet you!', "We haven't met yet, have we?", "Oh, you're new!",
                    "I don't know who told you you're welcome, but they're absolutely right.",
                    'Welcome to our little family!', "Please don't leave, we're doing our best."];

const welcomeBackMsg = ['Welcome back!', 'Home sweet Home!', 'I missed you...',
                    "Yay, you're back!", "You've been missed, captain.", "You in for another round?"];

const welcomeGif = ['../images/welcome/greeting1.gif', '../images/welcome/greeting2.gif', '../images/welcome/greeting3.gif',
                    '../images/welcome/greeting4.gif', '../images/welcome/greeting5.gif', '../images/welcome/greeting6.gif',
                    '../images/welcome/greeting7.gif', '../images/welcome/greeting8.gif', '../images/welcome/greeting9.gif',
                    '../images/welcome/greeting10.gif', '../images/welcome/greeting11.gif', '../images/welcome/greeting12.gif',
                    '../images/welcome/greeting13.gif', '../images/welcome/greeting14.gif', '../images/welcome/greeting15.gif'];

const wrongWayMsg = ['Wrong way, dummy.', 'You lost, buddy?', 'Where are you going?', 'Wait, come back!'];

const treeMsg = ['Never seen a tree before?', 'What are you looking for?',
                'You waiting for a Pokémon to fall or something?', "“What goes up must come down.” Sir Isaac Newton"];

const rockMsg = ['How interesting. A rock.', "You probably shouln't eat that.", 
                "“For who is God, but the Lord? And who is a rock, except our God?” Samuel 22:32"];

const waterMsg = ["Forget it, it's bloody freezing.", "You're gonna need a boat.",
                "“Be like water, my friend.” Bruce Lee", 
                '“You will joyfully draw water from the springs of salvation.” Isaiah 12:3',
                "There's a fine line between fishing and standing on the shore like an idiot."];

const logMsg = ["Something's inside... OMG A DRAGON BALL! Wait, wrong franchise.",
                'Look, my favorite spot.', "Hell no, it's dark inside."];

const snorlaxMsg = ['zzzzZZZZZZzzzz', 'ZZZZzzzzzzZZZZ', "It's probably a bad idea to wake him up."];

const jokeMsg = ['What does a fish say when it runs into a wall? Damn.',
                "What do you call a bee that can't make up its own mind? A maybee.",
                "Why did little Mary fall off the swing? Little Mary had no arms.",
                "Two men walk into a bar. The third one ducked.",
                "It takes guts to be an organ donor.",
                "We should start a parasite podcast called Tick Talk.",
                "You never really know until you find out.",
                "Context is really important.", "What's red and bad for your teeth? A brick.",
                "The difference between a hippo and a Zippo is that one is heavy and the other is a little lighter.",
                "On the other hand, you have different fingers.",
                "75% of german shepherds are dogs.",
                "Say what you want about deaf people.",
                "I just read that someone in London gets stabbed every 52 seconds. Poor guy."];

const oppMsg = ["There's a fatty in the way.", 'YOU SHALL NOT PASS!', 'Go ahead, make my day.',
                "I was having a wonderful day so far.", "*hisses like a cat*", 
                "Bring it, I have literally nothing better to do.", 'Avengers! Assemble!'];

const battleMsg = ["I'm in a hurry, I don't have time for this #@?%£&! (unintelligible profanity)",
                'Your mother was a hamster and your father smelt of elderberries.', 
                'You picked the wrong Pokémon, fool.', 'Hello, gorgeous.',
                "I'm about to do to you what Limp Bizkit did to music in the late 90's.",
                'Why so serious?', "Well, here's another nice mess I've gotten into."];

const noDmg = ['Yikes, that was close.', "You talking to me?", 'I need to go to the bathroom.',
                "What if we do rock-paper-scissors instead?", "Can't touch this, do-do-do-do.",
                "This is getting boring.", "*Matrix-like dodge*"];

const dealDmg = ['Shoo. Go away.', "You're gonna cry now?", "I love the smell of napalm in the morning.",
                "Perish, peasant. (machiavellian laughter)", 'MUAHAHAHAHAHAHAHAHA!', 
                "Are you sure you want to keep going?", 'Stabby-stab-stab. Hehe.'];

const sufferDmg = ['That was uncalled for.', "'Tis but a scratch.", "That actually kinda hurt.",
                'Get your stinking paws off me, you damned dirty Pokémon.', "That's bullying.",
                "I'm gonna call my mom.", "Stooooooop!"];

const winBattleMsg = ['Will you please move, now?', 'Hasta la vista, baby.',"I'm the king of the world!",
                    "Blood. I CRAVE BLOOD.", "It's finally over, thank God.", "Satisfied, now?"];

const lostBattleMsg = ['What do you mean?! I was just getting started! T.T', "I'll be back.",
                    "I'm sowyyy. Friends? Maybe?", "I'm cold... So cold.", "Father... avenge me!"];

const endBattleMsg = ['The weird stranger stopped bothering you.',
                    'The Empire has fallen. May the Force be with you.', 
                    'Keep your friends close, but your enemies closer.',
                    '“Nobody can hurt me without my permission.” Mahatma Gandhi',
                    'I should go get a bucket of fried chicken after this.',
                    'That. Was. INSANE.'];

const rescuePikachuMsg = ["I fell asleep again, didn't I?", "I don't even know where I am anymore.",
                        "I have no idea of what to get Eevee...", "You came for me..? You're so cute!",
                        '"Be not overcome of evil, but overcome evil with good." Romans 12:21',
                        '"O my God, I trust in thee: let me not be ashamed, let not mine enemies triumph over me." Psalm 25:2',
                        'I had a nightmare. We were prisoners in little red and white balls.',
                        "My belly hurts... Must've been all the thunder candy...",
                        "I broke his favorite stone, I can't go to the party!",
                        '"Ah, o amor... que nasce não sei onde, vem não sei como, e dói não sei porquê." Luís de Camões',
                        '"Se podes olhar, vê. Se podes ver, repara." José Saramago',
                        '"Hoje, Maria Leal aqui só pra ti." Maria Leal']

const pokemonImages = ['../images/vulpix.jpeg', '../images/ponyta.png', '../images/ekans.png', 
                    '../images/jigglypuff.png', '../images/pidgey.png', '../images/abra.png',
                    '../images/onix.png', '../images/lickitung.png', '../images/gastly.png',
                    '../images/butterfree.png', '../images/sandshrew.png', '../images/ditto.png',
                    '../images/nidoran.png', '../images/magnemite.png', '../images/psyduck.png',
                    '../images/rhyhorn.png', '../images/pinsir.png', '../images/tangela.png',
                    '../images/diglett.png', '../images/cubone.png', '../images/slowpoke.png'];

const pokemonNames = ['Vulpix', 'Ponyta', 'Ekans', 'Jigglypuff', 'Pidgey', 'Abra', 'Onix', 'Lickitung', 
                    'Gastly', 'Butterfree', 'Sandshrew', 'Ditto', 'Nidoran ♂', 'Magnemite', 'Psyduck',
                    'Rhyhorn', 'Pinsir', 'Tangela', 'Diglett', 'Cubone', 'Slowpoke'];

const legendPokemon = ['../images/moltres.png', '../images/zapdos.png', '../images/articuno.png',
                    '../images/mewtwo.png', '../images/lugia.png', '../images/entei.png',
                    '../images/raikou.png', '../images/suicune.png', '../images/rayquaza.png'];

const legendPokemonNames = ['Moltres', 'Zapdos', 'Articuno', 'Mewtwo', 'Lugia', 
                        'Entei', 'Raikou', 'Suicune', 'Rayquaza'];


// Objeto jogador
let player = {
    row: 1,
    column: 1,
    image: null,
    name: null,
    life: 12,
    max_life: 12,
    defeated: 0,
    end: 'No...',
    time: null
};


// Objetos oponente
let firstOpponent = {
    image: null,
    name: null,
    life: null,
    max_life: null,
    message: battleMsg[geraNumeroAleatorio(0, battleMsg.length-1)]
};

let secondOpponent = {
    image: null,
    name: null,
    life: null,
    max_life: null,
    message: battleMsg[geraNumeroAleatorio(0, battleMsg.length-1)]
};

let randomOpponent = {
    image: null,
    name: null,
    life: null,
    max_life: null,
    message: battleMsg[geraNumeroAleatorio(0, battleMsg.length-1)]
};


// Estado da posição do jogador.
// Usado para animação de movimento 
var pos;


// Variáveis a usar no relógio
var start_clock;
var clock;

// Função que corre ao fazer load da página

function Main() {
    if (localStorage.getItem('active') !== 'null' && localStorage.getItem('active')) {
        $('#options').hide();
        $('#main_menu').show();
        $('#info_name').html(localStorage.getItem('active'));
        $('#info_gif').attr('src', welcomeGif[geraNumeroAleatorio(0, welcomeGif.length-1)]);
        $('#info').show();
        if (localStorage.getItem('all_scores')) {
            return
        } else {
            localStorage.setItem('all_scores', '[]')
        };
    };
};


// Ready Main

$(document).ready(Main);


// Ir para Login

function goLogin() {
    $('#options').hide();
    $('#login').show();
};


// Ir para Registo

function goRegister() {
    $('#options').hide();
    $('#register').show();
};


// Confirmar Login

function confirmLogin() {
    let form = document.forms['form_login'];
    let valid_login = form.reportValidity();
    if (valid_login) {
        let user = localStorage.getItem(form.elements['user'].value);
        if (user) {
            if (form.elements['pass'].value === JSON.parse(user)[1]) {
                $('#user_login_error').hide();
                $('#user_login_error').html('');
                $('#pass_login_error').hide();
                $('#pass_login_error').html('');
                localStorage.setItem('active', JSON.parse(user)[0]);
                Welcome(welcomeBackMsg);
            } else {
                $('#pass_login_error').html('The password is incorrect.');
                $('#pass_login_error').show();
                $('#user_login_error').hide();
                $('#user_login_error').html('');
            };
        } else {
            $('#pass_login_error').hide();
            $('#pass_login_error').html('');
            $('#user_login_error').html('That username does not exist.');
            $('#user_login_error').show();
        };
    };
};


// Confirmar Registo

function confirmRegister() {
    let form = document.forms['form_register'];
    let valid_register = form.reportValidity();
    if (valid_register) {
        if (localStorage.getItem(form.elements['user'].value)) {
            $('#user_error').html('That username is already in use.');
            $('#user_error').show();
            $('#pass_error').hide();
            $('#pass_error').html('');
        } else {
            $('#user_error').hide();
            $('#user_error').html('');
            if (form.elements['pass'].value !== form.elements['pass_c'].value) {
                $('#pass_error').html('Passwords do not match.');
                $('#pass_error').show();
            } else {
                $('#user_error').hide();
                $('#user_error').html('');
                $('#pass_error').hide();
                $('#pass_error').html('');
                let new_player = [form.elements['user'].value, form.elements['pass'].value, form.elements['mail'].value, 
                                form.elements['age'].value, form.elements['gender'].value];
                localStorage.setItem(form.elements['user'].value, JSON.stringify(new_player))
                localStorage.setItem('active', new_player[0]);
                localStorage.setItem(new_player[0]+'_scores', JSON.stringify([]))
                Welcome(welcomeMsg);
            };
        };
    };
};


// Inicialização do Menu Principal ("Loading Screen" effect)

function Welcome(msg) {
    $('#login').hide();
    $('#register').hide();
    $('#welcome_text').html(msg[geraNumeroAleatorio(0, msg.length-1)]);
    $('#welcome_gif').attr('src', welcomeGif[geraNumeroAleatorio(0, welcomeGif.length-1)]);
    $('#info_name').html(localStorage.getItem('active'));
    $('#info_gif').attr('src', welcomeGif[geraNumeroAleatorio(0, welcomeGif.length-1)]);
    $('#welcome').show();
    setTimeout(function() {
        $('#welcome').hide();
        $('#main_menu').show();
        $('#info').show();
    }, 4000);
    if (localStorage.getItem('all_scores')) {
        return
    } else {
        localStorage.setItem('all_scores', '[]')
    };
};


// Função de Logout

function logOut() {
    localStorage.setItem('active', null);
    location.reload();
};


// Função que mostra personal best

function personalBest() {
    $('#score').hide();
    $('#board').hide();
    $('#main_menu').hide();
    atualizaPersonalBest();
    $('#mybest').show();
};


// Função que mostra leaderboard

function Leaderboard() {
    $('#board').hide();
    $('#main_menu').hide();
    atualizaLeaderboard();
    $('#lead').show();
};


// Função que muda dificuldade

function changeDifficulty() {
    var dif = sessionStorage.getItem('difficulty');
    if (dif === '1') {
        sessionStorage.setItem('difficulty', 2);
        $('#difficulty').html('Difficulty: Normal');
        player.life = 12;
        player.max_life = 12;
    } else if (dif === '2') {
        sessionStorage.setItem('difficulty', 3);
        $('#difficulty').html('Difficulty: Hard');
        player.life = 10;
        player.max_life = 10;
    } else if (dif === '3') {
        sessionStorage.setItem('difficulty', 4);
        $('#difficulty').html('Difficulty: Godlike');
        player.life = 8;
        player.max_life = 8;
    } else {
        sessionStorage.setItem('difficulty', 1);
        $('#difficulty').html('Difficulty: Easy');
        player.life = 12;
        player.max_life = 12;
    };
};


// Função Start Game

function startGame() {
    $('#main_menu').hide();
    $('#choice').show();
};


// Escolha do Pokémon Inicial

function Choice(number) {
    sessionStorage.setItem('starter', number);
    document.getElementById('choice').style.display = 'none';
    document.getElementById('board').style.display = 'grid';
    if (sessionStorage.getItem('starter') === '1') {
        player.image = '../images/charmander_back.png';
        player.name = 'Charmander';
    }
    else if (sessionStorage.getItem('starter') === '2') {
        player.image = '../images/squirtle_front_right.png';
        player.name = 'Squirtle';
    }
    else {
        player.image = '../images/bulbasaur_front_right.png';
        player.name = 'Bulbasaur';
    };

    //Inicializa relógio e cria o tabuleiro
    start_clock = Math.round(Date.now() / 10) / 100;
    clock = setInterval(atualizaInfo, 10);
    $('#score').show();
    criarTabuleiro();
};


// Função que muda texto no ecrã de escolha

function choiceText(number) {
    if (number == 1) {
        $('#thisone').html('Charmander');
    } else if (number == 2) {
        $('#thisone').html('Squirtle');
    } else {
        $('#thisone').html('Bulbasaur');
    };
};


// Função que mostra o tempo e pokémons derrotados em tempo real

function atualizaInfo() {
    let current_time = Math.round((Math.round(Date.now() / 10) / 100 - start_clock) * 100) / 100;
    $('#clock').html(current_time);
    $('#number_defeated').html(player.defeated);
    player.time = current_time;
};



// Função que desenha tabuleiro

function criarTabuleiro() {

    var tabuleiro = document.getElementById('board');

    // Criação geral

    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 5; j++) {
            var img = document.createElement('img');
            img.id = 'g'+i+j;
            img.src = '../images/tiles/grass.png';
            img.style.height = '100%';
            img.style.width = '100%';
            // Usar para ver os contornos dos mosaicos
            // img.style.borderStyle = 'solid';
            img.style.gridRow = i+'/ span 1';
            img.style.gridColumn = j+'/ span 1';
            tabuleiro.appendChild(img);
        };
    };

    // Criação da água

    document.getElementById('g31').src = '../images/tiles/water.png';
    document.getElementById('g31').id = 'w31';

    document.getElementById('g41').src = '../images/tiles/water.png';
    document.getElementById('g41').id = 'w41';

    document.getElementById('g51').src = '../images/tiles/water.png';
    document.getElementById('g51').id = 'w51';

    document.getElementById('g42').src = '../images/tiles/water.png';
    document.getElementById('g42').id = 'w42';

    document.getElementById('g52').src = '../images/tiles/water.png';
    document.getElementById('g52').id = 'w52';

    document.getElementById('g21').src = '../images/tiles/botwater.png';
    
    document.getElementById('g43').src = '../images/tiles/leftwater.png';

    document.getElementById('g53').src = '../images/tiles/leftwater.png';

    document.getElementById('g32').src = '../images/tiles/botleftwater.png';

    document.getElementById('g22').src = '../images/tiles/cornerwater.png';

    document.getElementById('g33').src = '../images/tiles/cornerwater.png';


    // Colocação inicial do jogador

    var p1 = document.createElement('img');
    p1.id = 'player';
    if (sessionStorage.getItem('starter') === '1') {
        p1.src = '../images/sprites/charmander_down.png';
        sessionStorage.setItem('status', 'cd');
    }
    else if (sessionStorage.getItem('starter') === '2') {
        p1.src = '../images/sprites/squirtle_down.png';
        sessionStorage.setItem('status', 'sd');
    }
    else {
        p1.src = '../images/sprites/bulbasaur_down.png';
        sessionStorage.setItem('status', 'bd');
    };
    tabuleiro.appendChild(p1);


    // Introdução de obstáculos

    var obj = document.createElement('img');
    obj.id = 'tree1';
    obj.src = '../images/tiles/tree.png';
    tabuleiro.appendChild(obj);

    var obj = document.createElement('img');
    obj.id = 'tree2';
    obj.src = '../images/tiles/treecut.png';
    tabuleiro.appendChild(obj);

    var obj = document.createElement('img');
    obj.id = 'stone1';
    obj.src = '../images/tiles/stone.png';
    tabuleiro.appendChild(obj);

    var obj = document.createElement('img');
    obj.id = 'shroom1';
    obj.src = '../images/tiles/shroom.png';
    tabuleiro.appendChild(obj);

    var obj = document.createElement('img');
    obj.id = 'shroom2';
    obj.src = '../images/tiles/shroom.png';
    tabuleiro.appendChild(obj);

    var obj = document.createElement('img');
    obj.id = 'log1';
    obj.src = '../images/tiles/log.png';
    tabuleiro.appendChild(obj);

    var obj = document.createElement('img');
    obj.id = 'snorlax';
    obj.src = '../images/tiles/snorlax.png';
    tabuleiro.appendChild(obj);

    var obj = document.createElement('img');
    obj.id = 'sign1';
    obj.src = '../images/tiles/sign.png';
    tabuleiro.appendChild(obj);


    // Geração e colocação de oponentes

    var op1 = document.createElement('img');
    op1.id = 'opponent1';

    var op2 = document.createElement('img');
    op2.id = 'opponent2';
    
    if (sessionStorage.getItem('starter') === '1') {
        op1.src = '../images/sprites/squirtle_down.png';
        op2.src = '../images/sprites/bulbasaur_left.png';
        firstOpponent.image = '../images/squirtle_front_left.png';
        secondOpponent.image = '../images/bulbasaur_front_left.png';
        firstOpponent.name = 'Squirtle';
        secondOpponent.name = 'Bulbasaur';
    }
    else if (sessionStorage.getItem('starter') === '2') {
        op1.src = '../images/sprites/bulbasaur_right.png';
        op2.src = '../images/sprites/charmander_down.png';
        firstOpponent.image = '../images/bulbasaur_front_left.png';
        secondOpponent.image = '../images/charmander.png';
        firstOpponent.name = 'Bulbasaur';
        secondOpponent.name = 'Charmander';
    }
    else {
        op1.src = '../images/sprites/charmander_left.png';
        op2.src = '../images/sprites/squirtle_up.png';
        firstOpponent.image = '../images/charmander.png';
        secondOpponent.image = '../images/squirtle_front_left.png';
        firstOpponent.name = 'Charmander';
        secondOpponent.name = 'Squirtle';
    };

    var dif = sessionStorage.getItem('difficulty');
    if (dif === '1') {
        let l1 = geraNumeroAleatorio(5,10);
        let l2 = geraNumeroAleatorio(5,10);
        firstOpponent.life = l1;
        firstOpponent.max_life = l1;
        secondOpponent.life = l2;
        secondOpponent.max_life = l2;
    } else if (dif === '2') {
        let l1 = geraNumeroAleatorio(5,12);
        let l2 = geraNumeroAleatorio(5,12);
        firstOpponent.life = l1;
        firstOpponent.max_life = l1;
        secondOpponent.life = l2;
        secondOpponent.max_life = l2;
    } else if (dif === '3') {
        let l1 = geraNumeroAleatorio(8,12);
        let l2 = geraNumeroAleatorio(8,12);
        firstOpponent.life = l1;
        firstOpponent.max_life = l1;
        secondOpponent.life = l2;
        secondOpponent.max_life = l2;
    } else {
        firstOpponent.life = 12;
        firstOpponent.max_life = 12;
        secondOpponent.life = 12;
        secondOpponent.max_life = 12;
    };

    tabuleiro.appendChild(op1);
    tabuleiro.appendChild(op2);


    // Colocação do objetivo

    var goal = document.createElement('img');
    goal.id = 'pikachu';
    goal.src = '../images/sprites/pikachu_resting.png';
    tabuleiro.appendChild(goal);


    // Proibição de movimento para cima de obstáculos

    document.getElementById('g12').id = 't12';

    document.getElementById('g32').id = 'r32';

    document.getElementById('g24').id = 'j24';

    document.getElementById('g34').id = 's34';

    document.getElementById('g43').id = 't43';

    document.getElementById('g44').id = 'l44';

    document.getElementById('g53').id = 'p53';

    document.getElementById('g13').id = 'o13';

    document.getElementById('g45').id = 'o45';


    // Desbloquear movimento

    $(document).on('keydown', Move);
    Mobile();

};


// Função que permite o Movimento

function Move(e) {
    if(window.event) {             
        if(e.key === 'w' || e.key === 'W') {
            MoveUp();
        };
        if(e.key === 's' || e.key === 'S') {
            MoveDown();
        };
        if(e.key === 'a' || e.key === 'A') {
            MoveLeft();
        };
        if(e.key === 'd' || e.key === 'D') {
            MoveRight();
        };
    };
};


// Função de confirmação (uso em caso de mensagem, para apagar a mesma)

function Confirm(e) {
    if(window.event) {             
        if(e.keyCode == 32) {
            apagaMensagem();
        };
    };
}


// Funções de Movimento

function MoveUp(){
    var p1 = document.getElementById('player');
    if (sessionStorage.getItem('starter') === '1') {
        p1.src = '../images/sprites/charmander_up.png';
        sessionStorage.setItem('status', 'cu');
    } else if (sessionStorage.getItem('starter') === '2') {
        p1.src = '../images/sprites/squirtle_up.png';
        sessionStorage.setItem('status', 'su');
    } else {
        p1.src = '../images/sprites/bulbasaur_up.png';
        sessionStorage.setItem('status', 'bu');
    };
    var r = player.row - 1;
    var c = player.column;
    if (document.getElementById('g'+r+c)) {
        pos = 10;
        var animation = setInterval(Slide, 6);
        var frame = setInterval(Animate, 125);
        setTimeout(function(){
        clearInterval(animation);
        clearInterval(frame);
        sessionStorage.setItem('frame', 0);
        p1.style.top = 'auto';
        $("#step")[0].currentTime = 0;
        $("#step")[0].play();
        player.row = r;
        p1.style.gridRow = r+'/ span 1';
        if (sessionStorage.getItem('battle') === 'null') {
            $(document).on('keydown', Move);
            Mobile();
        };
        Reset();
        randomBattle();
        }, 500)
    } else if (document.getElementById('t'+r+c)) {
        mostraMensagem(treeMsg[geraNumeroAleatorio(0, treeMsg.length-1)]);
    } else if (document.getElementById('w'+r+c)) {
        mostraMensagem(waterMsg[geraNumeroAleatorio(0, waterMsg.length-1)]);
    } else if (document.getElementById('r'+r+c)) {
        mostraMensagem(rockMsg[geraNumeroAleatorio(0, rockMsg.length-1)]);
    } else if (document.getElementById('l'+r+c)) {
        mostraMensagem(logMsg[geraNumeroAleatorio(0, logMsg.length-1)]);
    } else if (document.getElementById('s'+r+c)) {
        mostraMensagem(snorlaxMsg[geraNumeroAleatorio(0, snorlaxMsg.length-1)]);
    } else if (document.getElementById('j'+r+c)) {
        mostraMensagem(jokeMsg[geraNumeroAleatorio(0, jokeMsg.length-1)]);
    } else if (document.getElementById('o'+r+c)) {
        sessionStorage.setItem('battle', '1');
        mostraMensagem(oppMsg[geraNumeroAleatorio(0, oppMsg.length-1)]);
    } else {
        mostraMensagem(wrongWayMsg[geraNumeroAleatorio(0, wrongWayMsg.length-1)]);
    };
};

function MoveDown() {
    var p1 = document.getElementById('player');
    if (sessionStorage.getItem('starter') === '1') {
        p1.src = '../images/sprites/charmander_down.png';
        sessionStorage.setItem('status', 'cd');
    } else if (sessionStorage.getItem('starter') === '2') {
        p1.src = '../images/sprites/squirtle_down.png';
        sessionStorage.setItem('status', 'sd');
    } else {
        p1.src = '../images/sprites/bulbasaur_down.png';
        sessionStorage.setItem('status', 'bd');
    };
    var r = player.row + 1;
    var c = player.column;
    if (document.getElementById('g'+r+c)) {
        pos = 20;
        var animation = setInterval(Slide, 10);
        var frame = setInterval(Animate, 125);
        setTimeout(function(){
        clearInterval(animation);
        clearInterval(frame);
        sessionStorage.setItem('frame', 0);
        p1.style.top = 'auto';
        $("#step")[0].currentTime = 0;
        $("#step")[0].play();
        player.row = r;
        p1.style.gridRow = r+'/ span 1';
        if (sessionStorage.getItem('battle') === 'null') {
            $(document).on('keydown', Move);
            Mobile();
        };
        Reset();
        randomBattle();
        }, 500)
    } else if (document.getElementById('t'+r+c)) {
        mostraMensagem(treeMsg[geraNumeroAleatorio(0, treeMsg.length-1)]);
    } else if (document.getElementById('w'+r+c)) {
        mostraMensagem(waterMsg[geraNumeroAleatorio(0, waterMsg.length-1)]);
    } else if (document.getElementById('r'+r+c)) {
        mostraMensagem(rockMsg[geraNumeroAleatorio(0, rockMsg.length-1)]);
    } else if (document.getElementById('l'+r+c)) {
        mostraMensagem(logMsg[geraNumeroAleatorio(0, logMsg.length-1)]);
    } else if (document.getElementById('s'+r+c)) {
        mostraMensagem(snorlaxMsg[geraNumeroAleatorio(0, snorlaxMsg.length-1)]);
    } else if (document.getElementById('j'+r+c)) {
        mostraMensagem(jokeMsg[geraNumeroAleatorio(0, jokeMsg.length-1)]);
    } else if (document.getElementById('o'+r+c)) {
        sessionStorage.setItem('battle', '2');
        mostraMensagem(oppMsg[geraNumeroAleatorio(0, oppMsg.length-1)]);
    } else {
        mostraMensagem(wrongWayMsg[geraNumeroAleatorio(0, wrongWayMsg.length-1)]);
    };
};

function MoveLeft() {
    var p1 = document.getElementById('player');
    if (sessionStorage.getItem('starter') === '1') {
        p1.src = '../images/sprites/charmander_left.png';
        sessionStorage.setItem('status', 'cl');
    } else if (sessionStorage.getItem('starter') === '2') {
        p1.src = '../images/sprites/squirtle_left.png';
        sessionStorage.setItem('status', 'sl');
    } else {
        p1.src = '../images/sprites/bulbasaur_left.png';
        sessionStorage.setItem('status', 'bl');
    };
    var r = player.row;
    var c = player.column - 1;
    if (document.getElementById('g'+r+c)) {
        pos = 10;
        var animation = setInterval(Slide, 6);
        var frame = setInterval(Animate, 125);
        setTimeout(function(){
        clearInterval(animation);
        clearInterval(frame);
        sessionStorage.setItem('frame', 0);
        p1.style.left = 'auto';
        $("#step")[0].currentTime = 0;
        $("#step")[0].play();
        player.column = c;
        p1.style.gridColumn = c+'/ span 1';
        if (sessionStorage.getItem('battle') === 'null') {
            $(document).on('keydown', Move);
            Mobile();
        };
        Reset();
        randomBattle();
        }, 500)
    } else if (document.getElementById('t'+r+c)) {
        mostraMensagem(treeMsg[geraNumeroAleatorio(0, treeMsg.length-1)]);
    } else if (document.getElementById('w'+r+c)) {
        mostraMensagem(waterMsg[geraNumeroAleatorio(0, waterMsg.length-1)]);
    } else if (document.getElementById('r'+r+c)) {
        mostraMensagem(rockMsg[geraNumeroAleatorio(0, rockMsg.length-1)]);
    } else if (document.getElementById('l'+r+c)) {
        mostraMensagem(logMsg[geraNumeroAleatorio(0, logMsg.length-1)]);
    } else if (document.getElementById('s'+r+c)) {
        mostraMensagem(snorlaxMsg[geraNumeroAleatorio(0, snorlaxMsg.length-1)]);
    } else if (document.getElementById('j'+r+c)) {
        mostraMensagem(jokeMsg[geraNumeroAleatorio(0, jokeMsg.length-1)]);
    } else if (document.getElementById('o'+r+c)) {
        mostraMensagem(oppMsg[geraNumeroAleatorio(0, oppMsg.length-1)]);
    } else if (document.getElementById('p'+r+c)) {
        rescuePikachu();
    } else {
        mostraMensagem(wrongWayMsg[geraNumeroAleatorio(0, wrongWayMsg.length-1)]);
    };
};

function MoveRight() {
    var p1 = document.getElementById('player');
    if (sessionStorage.getItem('starter') === '1') {
        p1.src = '../images/sprites/charmander_right.png';
        sessionStorage.setItem('status', 'cr');
    } else if (sessionStorage.getItem('starter') === '2') {
        p1.src = '../images/sprites/squirtle_right.png';
        sessionStorage.setItem('status', 'sr');
    } else {
        p1.src = '../images/sprites/bulbasaur_right.png';
        sessionStorage.setItem('status', 'br');
    };
    var r = player.row;
    var c = player.column + 1;
    if (document.getElementById('g'+r+c)) {
        pos = 20;
        var animation = setInterval(Slide, 10);
        var frame = setInterval(Animate, 125);
        setTimeout(function(){
        clearInterval(animation);
        clearInterval(frame);
        sessionStorage.setItem('frame', 0);
        p1.style.left = 'auto';
        $("#step")[0].currentTime = 0;
        $("#step")[0].play();
        player.column = c;
        p1.style.gridColumn = c+'/ span 1';
        if (sessionStorage.getItem('battle') === 'null') {
            $(document).on('keydown', Move);
            Mobile();
        };
        Reset();
        randomBattle();
        }, 500)
    } else if (document.getElementById('t'+r+c)) {
        mostraMensagem(treeMsg[geraNumeroAleatorio(0, treeMsg.length-1)]);
    } else if (document.getElementById('w'+r+c)) {
        mostraMensagem(waterMsg[geraNumeroAleatorio(0, waterMsg.length-1)]);
    } else if (document.getElementById('r'+r+c)) {
        mostraMensagem(rockMsg[geraNumeroAleatorio(0, rockMsg.length-1)]);
    } else if (document.getElementById('l'+r+c)) {
        mostraMensagem(logMsg[geraNumeroAleatorio(0, logMsg.length-1)]);
    } else if (document.getElementById('s'+r+c)) {
        mostraMensagem(snorlaxMsg[geraNumeroAleatorio(0, snorlaxMsg.length-1)]);
    } else if (document.getElementById('j'+r+c)) {
        mostraMensagem(jokeMsg[geraNumeroAleatorio(0, jokeMsg.length-1)]);
    } else if (document.getElementById('o'+r+c)) {
        mostraMensagem(oppMsg[geraNumeroAleatorio(0, oppMsg.length-1)]);
    } else {
        mostraMensagem(wrongWayMsg[geraNumeroAleatorio(0, wrongWayMsg.length-1)]);
    };
};


// Função que anima movimento.

function Slide() {
    $(document).off();
    NoMobile();
    var p1 = document.getElementById('player');
    var status = sessionStorage.getItem('status');   
    if(status === 'cu' || status === 'su' || status === 'bu') {
        pos--; 
        p1.style.top = pos + '%';
    } else if(status === 'cd' || status === 'sd' || status === 'bd') {
        pos++;
        pos++;
        p1.style.top = pos + '%';
    } else if(status === 'cl' || status === 'sl' || status === 'bl') {
        pos--;
        p1.style.left = pos + '%';
    } else if(status === 'cr' || status === 'sr' || status === 'br') {
        pos++;
        pos++;
        p1.style.left = pos + '%';
    };
};


// Função que dá aspeto ao movimento.

function Animate() {
    var p1 = document.getElementById('player');
    var status = sessionStorage.getItem('status');
    var frame = sessionStorage.getItem('frame');
    if(status === 'cu') {
        if (frame === '0'){
            p1.src = '../images/sprites/charmander_up_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/charmander_up.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/charmander_up_step2.png';
            sessionStorage.setItem('frame', 0);
        };
    } else if(status === 'cd') {
        if (frame === '0'){
            p1.src = '../images/sprites/charmander_down_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/charmander_down.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/charmander_down_step2.png';
            sessionStorage.setItem('frame', 0);
        };
    } else if(status === 'cl') {
        if (frame === '0'){
            p1.src = '../images/sprites/charmander_left_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/charmander_left.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/charmander_left_step2.png';
            sessionStorage.setItem('frame', 0);
        };
    } else if(status === 'cr') {
        if (frame === '0'){
            p1.src = '../images/sprites/charmander_right_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/charmander_right.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/charmander_right_step2.png';
            sessionStorage.setItem('frame', 0);
        };
    } else if(status === 'su') {
        if (frame === '0'){
            p1.src = '../images/sprites/squirtle_up_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/squirtle_up.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/squirtle_up_step2.png';
            sessionStorage.setItem('frame', 0);
        };
    } else if(status === 'sd') {
        if (frame === '0'){
            p1.src = '../images/sprites/squirtle_down_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/squirtle_down.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/squirtle_down_step2.png';
            sessionStorage.setItem('frame', 0);
        };
    } else if(status === 'sl') {
        if (frame === '0'){
            p1.src = '../images/sprites/squirtle_left_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/squirtle_left.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/squirtle_left_step2.png';
            sessionStorage.setItem('frame', 0);
        };
    } else if(status === 'sr') {
        if (frame === '0'){
            p1.src = '../images/sprites/squirtle_right_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/squirtle_right.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/squirtle_right_step2.png';
            sessionStorage.setItem('frame', 0);
        };
    } else if(status === 'bu') {
        if (frame === '0'){
            p1.src = '../images/sprites/bulbasaur_up_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/bulbasaur_up_step2.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/bulbasaur_up.png';
            sessionStorage.setItem('frame', 0);
        };
    } else if(status === 'bd') {
        if (frame === '0'){
            p1.src = '../images/sprites/bulbasaur_down_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/bulbasaur_down_step2.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/bulbasaur_down.png';
            sessionStorage.setItem('frame', 0);
        };
    } else if(status === 'bl') {
        if (frame === '0'){
            p1.src = '../images/sprites/bulbasaur_left_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/bulbasaur_left_step2.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/bulbasaur_left.png';
            sessionStorage.setItem('frame', 0);
        };
    } else if(status === 'br') {
        if (frame === '0'){
            p1.src = '../images/sprites/bulbasaur_right_step1.png';
            sessionStorage.setItem('frame', 1);
        } else if(frame === '1') {
            p1.src = '../images/sprites/bulbasaur_right_step2.png';
            sessionStorage.setItem('frame', 2);
        } else if(frame === '2'){
            p1.src = '../images/sprites/bulbasaur_right.png';
            sessionStorage.setItem('frame', 0);
        };
    };
}


// Reinicia imagem de standby do jogador

function Reset() {
    var p1 = document.getElementById('player');
    var status = sessionStorage.getItem('status');   
    if(status === 'cu') {
        p1.src = '../images/sprites/charmander_up.png';
    } else if(status === 'cd') {
        p1.src = '../images/sprites/charmander_down.png';
    } else if(status === 'cl') {
        p1.src = '../images/sprites/charmander_left.png';
    } else if(status === 'cr') {
        p1.src = '../images/sprites/charmander_right.png';
    } else if(status === 'su') {
        p1.src = '../images/sprites/squirtle_up.png';
    } else if(status === 'sd') {
        p1.src = '../images/sprites/squirtle_down.png';
    } else if(status === 'sl') {
        p1.src = '../images/sprites/squirtle_left.png';
    } else if(status === 'sr') {
        p1.src = '../images/sprites/squirtle_right.png';
    } else if(status === 'bu') {
        p1.src = '../images/sprites/bulbasaur_up.png';
    } else if(status === 'bd') {
        p1.src = '../images/sprites/bulbasaur_down.png';
    } else if(status === 'bl') {
        p1.src = '../images/sprites/bulbasaur_left.png';
    } else if(status === 'br') {
        p1.src = '../images/sprites/bulbasaur_right.png';
    };
}


// Adiciona funcionalidades mobile

function Mobile() {
    $('#up').click(MoveUp);
    $('#down').click(MoveDown);
    $('#left').click(MoveLeft);
    $('#right').click(MoveRight);
};


// Retira Funcionalidades Mobile

function NoMobile() {
    $('#up').off();
    $('#down').off();
    $('#left').off();
    $('#right').off();
};

// Função que mostra mensagem

function mostraMensagem(msg) {
    $(document).off();
    NoMobile();
    $('#msg').html(msg);
    $('#msg').show();
    $('#msg').prepend("<img src='../images/menus/spacebar.png' alt='icon of spacebar key' id='spacebar'>")
    $(document).on('keydown', Confirm);
    $('#ok').click(apagaMensagem)
};


// Função que apaga mensagem

function apagaMensagem() {
    $('#ok').off();
    $(document).off();
    $('#msg').hide();
    $('#msg').html('');
    var bt = sessionStorage.getItem('battle');
    if (bt === '1') {
        battleStart(player, firstOpponent);
    } else if (bt === '2') {
        battleStart(player, secondOpponent);
    } else {
        $(document).on('keydown', Move);
        Mobile();
    };
};

// Função que gera número aleatório entre os parâmetros (inclusive)

function geraNumeroAleatorio(min, max) {
    var aleatorio = Math.floor(Math.random()*(max-min+1));
    return min+aleatorio;
};


// Função que inicia batalha

function battleStart(plr, opp) {
    $(document).off();
    NoMobile();
    $("#b_p_i").attr("src", plr.image);
    $('#b_o_i').attr("src", opp.image);
    if (plr.life > Math.floor(0.75*player.max_life)) {
        $('#b_p_n').css('background-color', 'rgb(137, 209, 153, 0.8)');
    } else if (plr.life > Math.floor(0.30*player.max_life)) {
        $('#b_p_n').css('background-color', 'rgb(225, 235, 95, 0.8)');
    } else {
        $('#b_p_n').css('background-color', 'rgb(225, 50, 50, 0.8)')
    };
    $('#b_o_n').css('background-color', 'rgb(137, 209, 153, 0.8)');
    $('#b_p_n').html(plr.name+'<br>'+plr.life+'/'+plr.max_life);
    $('#b_o_n').html(opp.name+'<br>'+opp.life+'/'+opp.max_life);
    $('#b_p_d').html('0');
    $('#b_o_d').html('0');
    $('#b_msg').html(opp.message);
    $('#fight').click(battleProgress);
    $('#battle').show();
};


// Função que inicia batalha aleatória

function randomBattle() {

    var dif = sessionStorage.getItem('difficulty');
    let l1;
    let prob;
    if (dif === '1') {
        l1 = geraNumeroAleatorio(1,10);
        prob = geraNumeroAleatorio(1,4);
        let index = geraNumeroAleatorio(0, pokemonImages.length-1);
        randomOpponent.image = pokemonImages[index];
        randomOpponent.name = pokemonNames[index];
    } else if (dif === '2') {
        l1 = geraNumeroAleatorio(1,12);
        prob = geraNumeroAleatorio(1,4);
        let index = geraNumeroAleatorio(0, pokemonImages.length-1);
        randomOpponent.image = pokemonImages[index];
        randomOpponent.name = pokemonNames[index];
    } else if (dif === '3') {
        l1 = geraNumeroAleatorio(3,12);
        prob = geraNumeroAleatorio(1,3);
        let index = geraNumeroAleatorio(0, pokemonImages.length-1);
        randomOpponent.image = pokemonImages[index];
        randomOpponent.name = pokemonNames[index];
    } else {
        l1 = geraNumeroAleatorio(5,12);
        prob = geraNumeroAleatorio(1,3);
        let index = geraNumeroAleatorio(0, legendPokemon.length-1);
        randomOpponent.image = legendPokemon[index];
        randomOpponent.name = legendPokemonNames[index];
    };

    randomOpponent.life = l1;
    randomOpponent.max_life = l1;
    if (prob === 1) {
        $(document).off();
        NoMobile();
        sessionStorage.setItem('battle', '3')
        battleStart(player, randomOpponent);
    };
};


// Função que faz progresso na batalha

function battleProgress() {
    var rolling = setInterval(function() {
        $('#fight').off();
        let die1 = geraNumeroAleatorio(1,6) + geraNumeroAleatorio(1,6);
        $('#b_p_d').html(die1);
        let die2 = geraNumeroAleatorio(1,6) + geraNumeroAleatorio(1,6);
        $('#b_o_d').html(die2);
    }, 10);

    var damage;
    setTimeout(function() {
        clearInterval(rolling);
        var dif = sessionStorage.getItem('difficulty');
        if (dif === '1') {
            die1 = geraNumeroAleatorio(2,6) + geraNumeroAleatorio(2,6);
            die2 = geraNumeroAleatorio(1,6) + geraNumeroAleatorio(1,6);
            $('#fight').click(battleProgress);
            $('#b_p_d').html(die1);
            $('#b_o_d').html(die2);
            damage = die1 - die2;
            if (damage > 0 && sessionStorage.getItem('battle') === '1') {
                firstOpponent.life = firstOpponent.life - damage;
                if (firstOpponent.life < 0) {
                    firstOpponent.life = 0;
                };
            } else if (damage > 0 && sessionStorage.getItem('battle') === '2') {
                secondOpponent.life = secondOpponent.life - damage;
                if (secondOpponent.life < 0) {
                    secondOpponent.life = 0;
                };
            } else if (damage > 0 && sessionStorage.getItem('battle') === '3') {
                randomOpponent.life = randomOpponent.life - damage;
                if (randomOpponent.life < 0) {
                    randomOpponent.life = 0;
                };
            } else if (damage < 0) {
                player.life = player.life + damage;
                if (player.life < 0) {
                    player.life = 0;
                };
            };
        } else if (dif === '2') {
            die1 = geraNumeroAleatorio(1,6) + geraNumeroAleatorio(1,6);
            die2 = geraNumeroAleatorio(1,6) + geraNumeroAleatorio(1,6);
            $('#fight').click(battleProgress);
            $('#b_p_d').html(die1);
            $('#b_o_d').html(die2);
            damage = die1 - die2;
            if (damage > 0 && sessionStorage.getItem('battle') === '1') {
                firstOpponent.life = firstOpponent.life - damage;
                if (firstOpponent.life < 0) {
                    firstOpponent.life = 0;
                };
            } else if (damage > 0 && sessionStorage.getItem('battle') === '2') {
                secondOpponent.life = secondOpponent.life - damage;
                if (secondOpponent.life < 0) {
                    secondOpponent.life = 0;
                };
            } else if (damage > 0 && sessionStorage.getItem('battle') === '3') {
                randomOpponent.life = randomOpponent.life - damage;
                if (randomOpponent.life < 0) {
                    randomOpponent.life = 0;
                };
            } else if (damage < 0) {
                player.life = player.life + damage;
                if (player.life < 0) {
                    player.life = 0;
                };
            };
        } else if (dif === '3') {
            die1 = geraNumeroAleatorio(1,6) + geraNumeroAleatorio(1,6);
            die2 = geraNumeroAleatorio(2,6) + geraNumeroAleatorio(2,6);
            $('#fight').click(battleProgress);
            $('#b_p_d').html(die1);
            $('#b_o_d').html(die2);
            damage = die1 - die2;
            if (damage > 0 && sessionStorage.getItem('battle') === '1') {
                firstOpponent.life = firstOpponent.life - damage;
                if (firstOpponent.life < 0) {
                    firstOpponent.life = 0;
                };
            } else if (damage > 0 && sessionStorage.getItem('battle') === '2') {
                secondOpponent.life = secondOpponent.life - damage;
                if (secondOpponent.life < 0) {
                    secondOpponent.life = 0;
                };
            } else if (damage > 0 && sessionStorage.getItem('battle') === '3') {
                randomOpponent.life = randomOpponent.life - damage;
                if (randomOpponent.life < 0) {
                    randomOpponent.life = 0;
                };
            } else if (damage < 0) {
                player.life = player.life + damage;
                if (player.life < 0) {
                    player.life = 0;
                };
            };
        } else {
            die1 = geraNumeroAleatorio(1,4) + geraNumeroAleatorio(1,4);
            die2 = geraNumeroAleatorio(1,6) + geraNumeroAleatorio(1,6);
            $('#fight').click(battleProgress);
            $('#b_p_d').html(die1);
            $('#b_o_d').html(die2);
            damage = die1 - die2;
            if (damage > 0 && sessionStorage.getItem('battle') === '1') {
                firstOpponent.life = firstOpponent.life - damage;
                if (firstOpponent.life < 0) {
                    firstOpponent.life = 0;
                };
            } else if (damage > 0 && sessionStorage.getItem('battle') === '2') {
                secondOpponent.life = secondOpponent.life - damage;
                if (secondOpponent.life < 0) {
                    secondOpponent.life = 0;
                };
            } else if (damage > 0 && sessionStorage.getItem('battle') === '3') {
                randomOpponent.life = randomOpponent.life - damage;
                if (randomOpponent.life < 0) {
                    randomOpponent.life = 0;
                };
            } else if (damage < 0) {
                player.life = player.life + damage;
                if (player.life < 0) {
                    player.life = 0;
                };
            };
        };
    }, 1000);
    
    setTimeout(function() {
        if (damage === 0) {
            $('#b_msg').html(noDmg[geraNumeroAleatorio(0, noDmg.length-1)]);
        } else if (damage > 0 && sessionStorage.getItem('battle') === '1') {
            if (firstOpponent.life > Math.floor(0.75*firstOpponent.max_life)) {
                $('#b_o_n').css('background-color', 'rgb(137, 209, 153, 0.8)');
            } else if (firstOpponent.life > Math.floor(0.30*firstOpponent.max_life)) {
                $('#b_o_n').css('background-color', 'rgb(225, 235, 95, 0.8)');
            } else {
                $('#b_o_n').css('background-color', 'rgb(225, 50, 50, 0.8)')
            };
            $('#b_msg').html(dealDmg[geraNumeroAleatorio(0, dealDmg.length-1)]);
            $('#b_o_n').html(firstOpponent.name+'<br>'+firstOpponent.life+'/'+firstOpponent.max_life);
        } else if (damage > 0 && sessionStorage.getItem('battle') === '2') {
            if (secondOpponent.life > Math.floor(0.75*secondOpponent.max_life)) {
                $('#b_o_n').css('background-color', 'rgb(137, 209, 153, 0.8)');
            } else if (secondOpponent.life > Math.floor(0.30*secondOpponent.max_life)) {
                $('#b_o_n').css('background-color', 'rgb(225, 235, 95, 0.8)');
            } else {
                $('#b_o_n').css('background-color', 'rgb(225, 50, 50, 0.8)')
            };
            $('#b_msg').html(dealDmg[geraNumeroAleatorio(0, dealDmg.length-1)]);
            $('#b_o_n').html(secondOpponent.name+'<br>'+secondOpponent.life+'/'+secondOpponent.max_life);
        } else if (damage > 0 && sessionStorage.getItem('battle') === '3') {
            if (randomOpponent.life > Math.floor(0.75*randomOpponent.max_life)) {
                $('#b_o_n').css('background-color', 'rgb(137, 209, 153, 0.8)');
            } else if (randomOpponent.life > Math.floor(0.30*randomOpponent.max_life)) {
                $('#b_o_n').css('background-color', 'rgb(225, 235, 95, 0.8)');
            } else {
                $('#b_o_n').css('background-color', 'rgb(225, 50, 50, 0.8)')
            };
            $('#b_msg').html(dealDmg[geraNumeroAleatorio(0, dealDmg.length-1)]);
            $('#b_o_n').html(randomOpponent.name+'<br>'+randomOpponent.life+'/'+randomOpponent.max_life);
        } else {
            if (player.life > Math.floor(0.75*player.max_life)) {
                $('#b_p_n').css('background-color', 'rgb(137, 209, 153, 0.8)');
            } else if (player.life > Math.floor(0.30*player.max_life)) {
                $('#b_p_n').css('background-color', 'rgb(225, 235, 95, 0.8)');
            } else {
                $('#b_p_n').css('background-color', 'rgb(225, 50, 50, 0.8)')
            };
            $('#b_msg').html(sufferDmg[geraNumeroAleatorio(0, sufferDmg.length-1)]);
            $('#b_p_n').html(player.name+'<br>'+player.life+'/'+player.max_life);
        };
    }, 1300);
    setTimeout(function() {
        if (firstOpponent.life === 0 && sessionStorage.getItem('battle') === '1') {
            $('#fight').off();
            $('#b_msg').html(winBattleMsg[geraNumeroAleatorio(0, winBattleMsg.length-1)]);
            $('#b_msg').prepend("<img src='../images/menus/spacebar.png' alt='icon of spacebar key' id='spacebar_b'>")
            $('#opponent1').hide();
            $('#o13').attr('id', 'g13');
            $(document).on('keydown', battleFinish);
            $('#ok').click(battleFinishMobile);
        } else if (secondOpponent.life === 0 && sessionStorage.getItem('battle') === '2') {
            $('#fight').off();
            $('#b_msg').html(winBattleMsg[geraNumeroAleatorio(0, winBattleMsg.length-1)]);
            $('#b_msg').prepend("<img src='../images/menus/spacebar.png' alt='icon of spacebar key' id='spacebar_b'>")
            $('#opponent2').hide();
            $('#o45').attr('id', 'g45');
            $(document).on('keydown', battleFinish);
            $('#ok').click(battleFinishMobile);
        } else if (randomOpponent.life === 0 && sessionStorage.getItem('battle') === '3') {
            $('#fight').off();
            $('#b_msg').html(winBattleMsg[geraNumeroAleatorio(0, winBattleMsg.length-1)]);
            $('#b_msg').prepend("<img src='../images/menus/spacebar.png' alt='icon of spacebar key' id='spacebar_b'>")
            $(document).on('keydown', battleFinish);
            $('#ok').click(battleFinishMobile);
        } else if (player.life === 0) {
            $('#fight').off();
            $('#b_msg').html(lostBattleMsg[geraNumeroAleatorio(0, lostBattleMsg.length-1)]);
            $('#b_msg').prepend("<img src='../images/menus/spacebar.png' alt='icon of spacebar key' id='spacebar_b'>")
            clearInterval(clock);
            $(document).on('keydown', gameOver);
            $('#ok').click(showScore);
        };
    }, 1300);
};


// Função que termina batalha

function battleFinish(e) {
    if(window.event) {             
        if(e.keyCode == 32) {
            sessionStorage.setItem('battle', null);
            $('#battle').hide();
            mostraMensagem(endBattleMsg[geraNumeroAleatorio(0, endBattleMsg.length-1)]);
            player.defeated++;
            player.life = player.life + Math.floor((player.max_life - player.life)/2);
        };
    };
};


// Função que termina batalha (adaptada para mobile)

function battleFinishMobile() {
    $('#ok').off();
    sessionStorage.setItem('battle', null);
    $('#battle').hide();
    mostraMensagem(endBattleMsg[geraNumeroAleatorio(0, endBattleMsg.length-1)]);
    player.defeated++;
    player.life = player.life + Math.floor((player.max_life - player.life)/2);
};


// Função Game Over

function gameOver(e) {
    if(window.event) {             
        if(e.keyCode == 32) {
            showScore();
        };
    };
};


// Função Ending

function rescuePikachu() {
    player.end = 'Yes!';
    clearInterval(clock);
    setTimeout(function() {
        $('#pikachu').attr('src', '../images/sprites/pikachu_left.png');
    }, 1000);
    setTimeout(function() {
        $('#pikachu').attr('src', '../images/sprites/pikachu_right.png');
    }, 2000);
    setTimeout(function() {
        $('#pikachu').attr('src', '../images/sprites/pikachu_down.png');
    }, 3000);
    setTimeout(function() {
        $('#pikachu').attr('src', '../images/sprites/pikachu_up.png');
    }, 3300);
    setTimeout(function() {
        $('#pikachu').attr('src', '../images/sprites/pikachu_left.png');
    }, 3600);
    setTimeout(function() {
        $('#pikachu').attr('src', '../images/sprites/pikachu_down.png');
    }, 4000);
    setTimeout(function() {
        $(document).off();
        NoMobile();
        if (sessionStorage.getItem('difficulty') === '4') {
            $('#msg').html('You are undoubtedly the luckiest person alive. Go buy a lottery ticket, like, right now.')
        } else {
            $('#msg').html(rescuePikachuMsg[geraNumeroAleatorio(0, rescuePikachuMsg.length-1)]);
        };
        $('#msg').show();
        $('#spacebar').hide();
        $('#msg').css('grid-row', '3 / span 1');
    }, 4500);
    setTimeout(function() {
        $('#msg').hide();
        $('#msg').html('');
    }, 8500);
    setTimeout(function() {
        $('#pikachu').attr('src', '../images/sprites/pikachu_final.png');
    }, 9000);
    setTimeout(function() {
        showScore();
    }, 9500);
};


// Função que mostra score

function showScore(){
    $('#ok').off();
    $('#battle').hide();
    addScoreToUser();
    addScoretoAllScores();
    $('#results').css('display', 'grid');
    $('#results').show();

    var s1 = setInterval(function() {
        $('#time_v').html(geraNumeroAleatorio(0, 999));
    }, 5);
    var s2;
    setTimeout(function() {
        clearInterval(s1);
        $('#time_v').html(player.time);
        s2 = setInterval(function() {
            $('#defeated_v').html(geraNumeroAleatorio(0, 99));
        }, 5);
    }, 1000);
    setTimeout(function() {
        clearInterval(s2);
        $('#defeated_v').html(player.defeated);
    }, 2000);
    var s3;
    setTimeout(function() {
        $('#goal_v').html(player.end);
        s3 = setInterval(function() {
            $('#points_v').html(geraNumeroAleatorio(0, 99999));
        }, 5);
    }, 2000);
    setTimeout(function() {
        clearInterval(s3);
        $('#points_v').html(String(scoreCalculator()));
    }, 4500);
    setTimeout(function() {
        $('#gotit').html('Got it!');
        $('#gotit').click(personalBest);
    }, 4700);
};



// Função que calcula score

function scoreCalculator() {
    var dif = sessionStorage.getItem('difficulty');
    let points = 0;
    if (dif === '1') {
        if (player.end === 'Yes!') {
            points += 500;
        };
        points += 50*parseInt(player.defeated);
        points -= Math.round(player.time);
    } else if (dif === '2') {
        if (player.end === 'Yes!') {
            points += 1000;
        };
        points += 100*parseInt(player.defeated);
        points -= Math.round(player.time);
    } else if (dif === '3') {
        if (player.end === 'Yes!') {
            points += 2000;
        };
        points += 200*parseInt(player.defeated);
        points -= Math.round(player.time);
    } else {
        if (player.end === 'Yes!') {
            points += 10000;
        };
        points += 300*parseInt(player.defeated);
        points -= Math.round(player.time);
    };
    if (points < 0) {
        points = 0;
    };
    return points;
};


// Função que adiciona score aos resultados do jogador

function addScoreToUser() {
    var user = localStorage.getItem('active');
    var user_scores = JSON.parse(localStorage.getItem(user+'_scores'));
    user_scores.push(scoreCalculator());

    function compararNumeros(a, b) {
        return b - a;
    };
    
    user_scores.sort(compararNumeros);
    localStorage.setItem(user+'_scores', JSON.stringify(user_scores));
};


// Função que adiciona score aos resultados totais

function addScoretoAllScores() {
    var active_user = localStorage.getItem('active');
    var all_scores = JSON.parse(localStorage.getItem('all_scores'));
    all_scores.push({ user: active_user, score: scoreCalculator()});

    function compararScores(a, b) {
        return b.score - a.score;
    };
    
    all_scores.sort(compararScores);
    localStorage.setItem('all_scores', JSON.stringify(all_scores));
};


// Função que atualiza personal best

function atualizaPersonalBest () {
    let i = 1;
    var user = localStorage.getItem('active');
    let user_scores = JSON.parse(localStorage.getItem(user+'_scores'));
    while (i <= user_scores.length && i < 6) {
        $('#pbs'+i).html(user_scores[i-1]+' pts');
        i++;
    };
};


// Função que atualiza leaderboard

function atualizaLeaderboard () {
    let i = 1;
    let all_scores = JSON.parse(localStorage.getItem('all_scores'));
    while (i <= all_scores.length && i < 11) {
        $('#lu'+i).html(all_scores[i-1].user);
        $('#ls'+i).html(all_scores[i-1].score+' pts');
        i++;
    };
};