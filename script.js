/* =========================================================
   BHAKTI MANDIR
   LOCAL MP3 VERSION
   NO DATABASE
========================================================= */


/* =========================================================
   SONG FILE LISTS
========================================================= */

const SONG_FILES = {

    ganesh: [

        "Deva Shree Ganesh.mp3",
        "Ganesh Chalisa.mp3",
        "Ganpati Bappa Morya.mp3",
        "Jai Ganesh Deva.mp3",
        "Morya Re Bappa Morya Re.mp3",
        "Shendur Lal Chadhayo.mp3",
        "Sukhkarta Dukhharta.mp3"

    ],


    hanuman: [

        "Bajrang baan.mp3",
        "Bajrang Baanka — Hanuman Ansh.mp3",
        "Balaji acha lage se.mp3",
        "Balaji Mere Ghar Aana.mp3",
        "Hanuman aarti.mp3",
        "Hanuman Amritwani.mp3",
        "Hanuman gaytri mantra.mp3",
        "Hanuman Vandana.mp3",
        "hariharan_-_Hanuman_Chalisa_(mp3.pm).mp3",
        "hey dukh banjan.mp3",
        "Jai Hanuman — Hanuman Ansh.mp3",
        "Jai jai bajrangbali .mp3",
        "keejo kesari ke laal.mp3",
        "Kesari Nandan.mp3",
        "Maine Tere Hi Bharose.mp3",
        "Mangal Murti maruti nandan.mp3",
        "Mehandipur Wale Balaji.mp3",
        "more sankat ke katiya.mp3",
        "On hanumnate namah.mp3",
        "Pawanay tanay sankat haran.mp3",
        "salasar dham.mp3",
        "Sankat mochan hanuman.mp3",
        "Shri ram ki gali.mp3",
        "Veer Hanumana Ati Balwana.mp3"

    ],


    shyam: [

        "Haare Ka Sahara Baba Shyam Hamara.mp3",
        "Hara Hu Baba Par Tujhpe Bharosa Hai.mp3",
        "Jai Shri Shyam.mp3",
        "Khatu Wale Shyam.mp3",
        "Mera Shyam Aa Jata Mere Samne.mp3",
        "Sheesh Ke Dani.mp3",
        "Teen Baan Dhari.mp3"

    ],


    krishna: [

        "Achyutam Keshavam.mp3",
        "Choti Choti Gaiya Chote Chote Gwal.mp3",
        "Govind Bolo Hari Gopal Bolo.mp3",
        "Hare Krishna Hare Rama.mp3",
        "Krishna Hai.mp3",
        "Maiya Mori Main Nahi Makhan Khayo.mp3",
        "Mere Banke Bihari Lal.mp3",
        "O Kanha Ab To Murli Ki Madhur.mp3",
        "Radha Rani Lage.mp3",
        "Radhe Radhe Japa Karo.mp3",
        "Radhe Radhe.mp3",
        "Shri Krishna Govind Hare Murari.mp3",
        "Shyam Chudi Bechne.mp3",
        "Tum Prem Ho.mp3",
        "Yashomati Maiya Se Bole Nandlala.mp3"

    ],


    ram: [

        "Bhaye Pragat Kripala.mp3",
        "Jai Raghunandan Jai Siyaram.mp3",
        "Mangal Bhavan Amangal Hari.mp3",
        "Mere Ghar Ram Aaye Hain.mp3",
        "Payo Ji Maine Ram Ratan Dhan Payo.mp3",
        "Raghupati Raghav Raja Ram.mp3",
        "Ram Aayenge.mp3",
        "Ram Dhun.mp3",
        "Ram Naam Ke Hire Moti.mp3",
        "Ram Siya Ram.mp3",
        "Rama Rama Ratte Ratte Biti Re Umariya.mp3",
        "Sita Ram Sita Ram.mp3",
        "Thumak Chalat Ramchandra.mp3"

    ],


    shiv: [

        "Aavagaman.mp3",
        "Bhole Nath Se Nirala.mp3",
        "Ganga Ke Kinare.mp3",
        "Har Har Mahadev.mp3",
        "Har Har Shambhu.mp3",
        "Hey Shambhu Baba Mere Bhole Nath.mp3",
        "Jai Shiv Omkara.mp3",
        "Jaikal Mahakal.mp3",
        "Karpur Gauram Karunavtaram.mp3",
        "Kaun Hain Voh.mp3",
        "Mahamrityunjaya Mantra.mp3",
        "Mera Bhola Hai Bhandari.mp3",
        "Namo Namo — Kedarnath.mp3",
        "Om Namah Shivaya.mp3",
        "Parvati.mp3",
        "Shiv Panchakshar Stotram.mp3",
        "Shiv Sama Rahe Mujhme.mp3",
        "Shiv Shankar Ko Jisne Pooja.mp3",
        "Shiv Tandav Stotram.mp3"

    ]

};


/* =========================================================
   GOD DETAILS
========================================================= */

const GODS = {

    mix: {

        name: "Mix All",
        icon: "🎶",
        folder: "",
        greeting: "🙏 Welcome to Bhakti Mandir",
        subtitle: "All downloaded bhajans in one random playlist.",
        background:
            "linear-gradient(125deg,#8b3200,#f57c00 48%,#ffb74d)"

    },


    shiv: {

        name: "Shiv Ji",
        icon: "🔱",
        folder: "Shiv ji",
        greeting: "ॐ नमः शिवाय",
        subtitle: "Mahadev bhajans, stotra and mantras.",
        background:
            "linear-gradient(125deg,#101a2d,#264565,#557fa6)"

    },


    ram: {

        name: "Shri Ram",
        icon: "🏹",
        folder: "Ram ji",
        greeting: "🚩 Jai Shri Ram",
        subtitle: "Shri Ram devotional songs and bhajans.",
        background:
            "linear-gradient(125deg,#a52c00,#ef6c00,#ffad33)"

    },


    hanuman: {

        name: "Hanuman Ji",
        icon: "🚩",
        folder: "Hanuman Ji",
        greeting: "🙏 Jai Bajrangbali",
        subtitle: "Hanuman Ji and Balaji devotional songs.",
        background:
            "linear-gradient(125deg,#821616,#d94800,#ff8a00)"

    },


    krishna: {

        name: "Krishna Ji",
        icon: "🪈",
        folder: "Krishna ji",
        greeting: "🦚 Radhe Radhe",
        subtitle: "Krishna and Radha devotional songs.",
        background:
            "linear-gradient(125deg,#253278,#563ba8,#008b94)"

    },


    ganesh: {

        name: "Ganesh Ji",
        icon: "🐘",
        folder: "Ganesh ji",
        greeting: "🙏 Ganpati Bappa Morya",
        subtitle: "Ganesh Ji devotional collection.",
        background:
            "linear-gradient(125deg,#bb4b00,#f38b00,#ffc247)"

    },


    shyam: {

        name: "Khatu Shyam Ji",
        icon: "🦚",
        folder: "Khatu shayam ji",
        greeting: "🙏 Jai Shri Shyam",
        subtitle: "Khatu Shyam Ji devotional collection.",
        background:
            "linear-gradient(125deg,#075d53,#008879,#36b6a2)"

    }

};


/* =========================================================
   CREATE SONG OBJECTS
========================================================= */

function cleanSongTitle(filename) {

    let title =
        filename.replace(
            /\.mp3$/i,
            ""
        );


    if (
        title ===
        "hariharan_-_Hanuman_Chalisa_(mp3.pm)"
    ) {

        return "Hanuman Chalisa — Hariharan";

    }


    title =
        title.replace(
            /_/g,
            " "
        );


    return title.trim();

}


function createSongList(god) {

    const details =
        GODS[god];


    return SONG_FILES[god].map(

        filename => {

            return {

                god: god,
                title:
                    cleanSongTitle(filename),
                deity:
                    details.name,
                icon:
                    details.icon,
                filename:
                    filename,
                src:
                    `Songs/${details.folder}/${filename}`

            };

        }

    );

}


/* =========================================================
   BUILD MASTER SONG ARRAY
========================================================= */

let SONGS = [];


[
    "ganesh",
    "hanuman",
    "shyam",
    "krishna",
    "ram",
    "shiv"
]
.forEach(

    god => {

        SONGS.push(
            ...createSongList(god)
        );

    }

);


/*
   Jai Shri Ram file Shiv folder me hai,
   lekin website me Ram category me dikhayenge.
*/

SONGS.push({

    god: "ram",
    title: "Jai Shri Ram",
    deity: "Shri Ram",
    icon: "🏹",
    filename: "Jai Shri Ram.mp3",
    src: "Songs/Shiv ji/Jai Shri Ram.mp3"

});


/* =========================================================
   ELEMENTS
========================================================= */

const audio =
    document.getElementById(
        "audioPlayer"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const hero =
    document.getElementById(
        "hero"
    );


const heroGreeting =
    document.getElementById(
        "heroGreeting"
    );


const heroTitle =
    document.getElementById(
        "heroTitle"
    );


const heroSubtitle =
    document.getElementById(
        "heroSubtitle"
    );


const sectionCount =
    document.getElementById(
        "sectionCount"
    );


const shuffleStatus =
    document.getElementById(
        "shuffleStatus"
    );


const quickListTitle =
    document.getElementById(
        "quickListTitle"
    );


const heroQuickList =
    document.getElementById(
        "heroQuickList"
    );


const songList =
    document.getElementById(
        "songList"
    );


const songSectionTitle =
    document.getElementById(
        "songSectionTitle"
    );


const songCount =
    document.getElementById(
        "songCount"
    );


const heroSongCover =
    document.getElementById(
        "heroSongCover"
    );


const heroSongTitle =
    document.getElementById(
        "heroSongTitle"
    );


const heroSongArtist =
    document.getElementById(
        "heroSongArtist"
    );


const bottomCover =
    document.getElementById(
        "bottomCover"
    );


const bottomTitle =
    document.getElementById(
        "bottomTitle"
    );


const bottomArtist =
    document.getElementById(
        "bottomArtist"
    );


const heroPlayBtn =
    document.getElementById(
        "heroPlayBtn"
    );


const bottomPlayBtn =
    document.getElementById(
        "bottomPlayBtn"
    );


const heroProgress =
    document.getElementById(
        "heroProgress"
    );


const bottomProgress =
    document.getElementById(
        "bottomProgress"
    );


const heroCurrentTime =
    document.getElementById(
        "heroCurrentTime"
    );


const bottomCurrentTime =
    document.getElementById(
        "bottomCurrentTime"
    );


const heroDuration =
    document.getElementById(
        "heroDuration"
    );


const bottomDuration =
    document.getElementById(
        "bottomDuration"
    );


const volumeSlider =
    document.getElementById(
        "volumeSlider"
    );


const muteBtn =
    document.getElementById(
        "muteBtn"
    );


const shuffleBtn =
    document.getElementById(
        "shuffleBtn"
    );


const repeatBtn =
    document.getElementById(
        "repeatBtn"
    );


/* =========================================================
   STATE
========================================================= */

let selectedGod =
    "mix";


let queue =
    [];


let visibleSongs =
    [];


let currentSong =
    null;


let currentIndex =
    -1;


let shuffleMode =
    true;


let repeatMode =
    false;


let lastVolume =
    0.8;


audio.volume =
    0.8;


/* =========================================================
   START
========================================================= */

function startWebsite() {

    setupEvents();

    selectGod(
        "mix"
    );

}


startWebsite();


/* =========================================================
   EVENTS
========================================================= */

function setupEvents() {


    document
        .querySelectorAll(
            ".god-btn"
        )
        .forEach(

            button => {

                button.addEventListener(

                    "click",

                    () => {

                        selectGod(
                            button.dataset.god
                        );

                    }

                );

            }

        );


    document
        .getElementById(
            "homeBrand"
        )
        .addEventListener(

            "click",

            event => {

                event.preventDefault();

                selectGod(
                    "mix"
                );

                window.scrollTo({

                    top: 0,
                    behavior: "smooth"

                });

            }

        );


    /* =====================================================
       SEARCH LIVE
    ====================================================== */

    searchInput.addEventListener(

        "input",

        () => {

            renderSongs();

            renderSearchQuickList();

        }

    );


    /* =====================================================
       ENTER = PLAY FIRST MATCH
    ====================================================== */

    searchInput.addEventListener(

        "keydown",

        event => {

            if (
                event.key !== "Enter"
            ) {

                return;

            }


            event.preventDefault();


            const results =
                getSearchResults();


            if (
                results.length === 0
            ) {

                return;

            }


            loadSong(
                results[0],
                true
            );


            document
                .getElementById(
                    "songsSection"
                )
                .scrollIntoView({

                    behavior:
                        "smooth"

                });

        }

    );


    heroPlayBtn.addEventListener(
        "click",
        togglePlay
    );


    bottomPlayBtn.addEventListener(
        "click",
        togglePlay
    );


    document
        .getElementById(
            "heroNextBtn"
        )
        .addEventListener(
            "click",
            nextSong
        );


    document
        .getElementById(
            "nextBtn"
        )
        .addEventListener(
            "click",
            nextSong
        );


    document
        .getElementById(
            "heroPrevBtn"
        )
        .addEventListener(
            "click",
            previousSong
        );


    document
        .getElementById(
            "previousBtn"
        )
        .addEventListener(
            "click",
            previousSong
        );


    document
        .getElementById(
            "back10Btn"
        )
        .addEventListener(

            "click",

            () => {

                seekBy(
                    -10
                );

            }

        );


    document
        .getElementById(
            "forward10Btn"
        )
        .addEventListener(

            "click",

            () => {

                seekBy(
                    10
                );

            }

        );


    document
        .getElementById(
            "randomBtn"
        )
        .addEventListener(
            "click",
            playRandomSong
        );


    document
        .getElementById(
            "refreshQuickBtn"
        )
        .addEventListener(

            "click",

            () => {

                if (
                    searchInput
                        .value
                        .trim() !== ""
                ) {

                    renderSearchQuickList();

                }

                else {

                    renderQuickList();

                }

            }

        );


    document
        .getElementById(
            "viewAllSongsBtn"
        )
        .addEventListener(

            "click",

            () => {

                document
                    .getElementById(
                        "songsSection"
                    )
                    .scrollIntoView({

                        behavior:
                            "smooth"

                    });

            }

        );


    shuffleBtn.addEventListener(

        "click",

        () => {

            setShuffle(
                !shuffleMode
            );

        }

    );


    repeatBtn.addEventListener(
        "click",
        toggleRepeat
    );


    volumeSlider.addEventListener(

        "input",

        () => {

            const value =
                Number(
                    volumeSlider.value
                );


            audio.volume =
                value;


            if (
                value > 0
            ) {

                audio.muted =
                    false;

                lastVolume =
                    value;

            }


            updateMuteIcon();

        }

    );


    muteBtn.addEventListener(
        "click",
        toggleMute
    );


    heroProgress.addEventListener(

        "input",

        () => {

            seekFromProgress(
                heroProgress.value
            );

        }

    );


    bottomProgress.addEventListener(

        "input",

        () => {

            seekFromProgress(
                bottomProgress.value
            );

        }

    );


    audio.addEventListener(
        "timeupdate",
        updateProgress
    );


    audio.addEventListener(
        "loadedmetadata",
        updateProgress
    );


    audio.addEventListener(
        "play",
        updatePlayButtons
    );


    audio.addEventListener(
        "pause",
        updatePlayButtons
    );


    audio.addEventListener(
        "ended",
        handleSongEnded
    );


    audio.addEventListener(
        "error",
        handleAudioError
    );


    document
        .getElementById(
            "bellButton"
        )
        .addEventListener(
            "click",
            ringBell
        );


    document.addEventListener(
        "keydown",
        handleKeyboard
    );

}


/* =========================================================
   SEARCH
========================================================= */

function getSearchResults() {


    const search =
        searchInput
            .value
            .trim()
            .toLowerCase();


    if (
        search === ""
    ) {

        return [...queue];

    }


    return queue.filter(

        song => {

            return (

                song.title
                    .toLowerCase()
                    .includes(search)

                ||

                song.deity
                    .toLowerCase()
                    .includes(search)

                ||

                song.filename
                    .toLowerCase()
                    .includes(search)

                ||

                song.god
                    .toLowerCase()
                    .includes(search)

            );

        }

    );

}


/* =========================================================
   GOD SELECTION
========================================================= */

function selectGod(god) {


    selectedGod =
        god;


    searchInput.value =
        "";


    document
        .querySelectorAll(
            ".god-btn"
        )
        .forEach(

            button => {

                button
                    .classList
                    .toggle(

                        "active",

                        button.dataset.god === god

                    );

            }

        );


    const details =
        GODS[god];


    hero.style.background =
        details.background;


    heroGreeting.textContent =
        details.greeting;


    heroTitle.textContent =
        `${details.icon} ${details.name}`;


    heroSubtitle.textContent =
        details.subtitle;


    songSectionTitle.textContent =
        details.name;


    quickListTitle.textContent =
        god === "mix"
            ? "Random Mix"
            : `${details.name} Quick Play`;


    if (
        god === "mix"
    ) {

        queue =
            [...SONGS];

        setShuffle(
            true
        );

    }

    else {

        queue =
            SONGS.filter(

                song =>
                    song.god === god

            );

        setShuffle(
            false
        );

    }


    sectionCount.textContent =
        `${queue.length} Songs`;


    renderSongs();

    renderQuickList();


    if (
        queue.length > 0
    ) {

        const song =
            queue[
                randomIndex(
                    queue.length
                )
            ];


        loadSong(
            song,
            false
        );

    }

    else {

        clearPlayer();

    }

}


/* =========================================================
   RENDER SONGS
========================================================= */

function renderSongs() {


    visibleSongs =
        getSearchResults();


    songCount.textContent =
        `${visibleSongs.length} songs`;


    songList.innerHTML =
        "";


    if (
        visibleSongs.length === 0
    ) {

        const message =
            document.createElement(
                "div"
            );


        message.className =
            "empty-message";


        message.textContent =
            "No bhajan found.";


        songList.appendChild(
            message
        );


        return;

    }


    visibleSongs.forEach(

        song => {


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "song-card";


            if (
                currentSong &&
                currentSong.src === song.src
            ) {

                card.classList.add(
                    "active"
                );

            }


            const cover =
                document.createElement(
                    "div"
                );


            cover.className =
                "song-cover";


            cover.textContent =
                song.icon;


            const info =
                document.createElement(
                    "div"
                );


            info.className =
                "song-meta";


            const title =
                document.createElement(
                    "strong"
                );


            title.textContent =
                song.title;


            const deity =
                document.createElement(
                    "small"
                );


            deity.textContent =
                song.deity;


            info.append(
                title,
                deity
            );


            const playButton =
                document.createElement(
                    "button"
                );


            playButton.className =
                "card-play";


            if (
                currentSong &&
                currentSong.src === song.src &&
                !audio.paused
            ) {

                playButton.textContent =
                    "❚❚";

            }

            else {

                playButton.textContent =
                    "▶";

            }


            card.append(
                cover,
                info,
                playButton
            );


            card.addEventListener(

                "click",

                () => {

                    if (
                        currentSong &&
                        currentSong.src === song.src
                    ) {

                        togglePlay();

                    }

                    else {

                        loadSong(
                            song,
                            true
                        );

                    }

                }

            );


            songList.appendChild(
                card
            );

        }

    );

}


/* =========================================================
   NORMAL QUICK PLAY
========================================================= */

function renderQuickList() {


    heroQuickList.innerHTML =
        "";


    if (
        queue.length === 0
    ) {

        return;

    }


    quickListTitle.textContent =
        selectedGod === "mix"
            ? "Random Mix"
            : `${GODS[selectedGod].name} Quick Play`;


    const randomSongs =
        shuffleArray(
            [...queue]
        )
        .slice(
            0,
            Math.min(
                6,
                queue.length
            )
        );


    renderQuickItems(
        randomSongs
    );

}


/* =========================================================
   SEARCH QUICK PLAY
========================================================= */

function renderSearchQuickList() {


    const search =
        searchInput
            .value
            .trim();


    if (
        search === ""
    ) {

        renderQuickList();

        return;

    }


    const results =
        getSearchResults();


    heroQuickList.innerHTML =
        "";


    quickListTitle.textContent =
        `Search Results (${results.length})`;


    if (
        results.length === 0
    ) {

        const message =
            document.createElement(
                "div"
            );


        message.style.padding =
            "25px 10px";


        message.style.textAlign =
            "center";


        message.style.opacity =
            "0.8";


        message.textContent =
            "No bhajan found";


        heroQuickList.appendChild(
            message
        );


        return;

    }


    renderQuickItems(
        results.slice(
            0,
            8
        )
    );

}


/* =========================================================
   QUICK ITEM BUILDER
========================================================= */

function renderQuickItems(list) {


    list.forEach(

        song => {


            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "quick-item";


            if (
                currentSong &&
                currentSong.src === song.src
            ) {

                button.classList.add(
                    "active"
                );

            }


            const icon =
                document.createElement(
                    "span"
                );


            icon.className =
                "quick-icon";


            icon.textContent =
                song.icon;


            const info =
                document.createElement(
                    "span"
                );


            info.className =
                "quick-info";


            const title =
                document.createElement(
                    "strong"
                );


            title.textContent =
                song.title;


            const deity =
                document.createElement(
                    "small"
                );


            deity.textContent =
                song.deity;


            info.append(
                title,
                deity
            );


            const playIcon =
                document.createElement(
                    "span"
                );


            playIcon.className =
                "quick-play";


            playIcon.textContent =
                "▶";


            button.append(
                icon,
                info,
                playIcon
            );


            button.addEventListener(

                "click",

                () => {

                    loadSong(
                        song,
                        true
                    );

                }

            );


            heroQuickList.appendChild(
                button
            );

        }

    );

}


/* =========================================================
   LOAD SONG
========================================================= */

function loadSong(
    song,
    autoPlay = false
) {


    if (
        !song
    ) {

        return;

    }


    currentSong =
        song;


    currentIndex =
        queue.findIndex(

            item =>
                item.src === song.src

        );


    audio.pause();


    audio.src =
        encodeURI(
            song.src
        );


    audio.load();


    heroSongCover.textContent =
        song.icon;


    bottomCover.textContent =
        song.icon;


    heroSongTitle.textContent =
        song.title;


    bottomTitle.textContent =
        song.title;


    heroSongArtist.textContent =
        song.deity;


    bottomArtist.textContent =
        song.deity;


    resetProgress();


    renderSongs();


    if (
        searchInput
            .value
            .trim() !== ""
    ) {

        renderSearchQuickList();

    }

    else {

        renderQuickList();

    }


    if (
        autoPlay
    ) {

        playAudio();

    }

}


/* =========================================================
   PLAY / PAUSE
========================================================= */

function togglePlay() {


    if (
        !currentSong
    ) {


        if (
            queue.length === 0
        ) {

            return;

        }


        const song =
            queue[
                randomIndex(
                    queue.length
                )
            ];


        loadSong(
            song,
            true
        );


        return;

    }


    if (
        audio.paused
    ) {

        playAudio();

    }

    else {

        audio.pause();

    }

}


function playAudio() {


    audio
        .play()
        .catch(

            error => {

                console.error(
                    "Playback error:",
                    error
                );


                alert(
                    "Song play nahi hua. Check karo MP3 file ka naam/path same hai."
                );

            }

        );

}


/* =========================================================
   NEXT
========================================================= */

function nextSong() {


    if (
        queue.length === 0
    ) {

        return;

    }


    let workingQueue =
        queue;


    const searchResults =
        getSearchResults();


    if (
        searchInput
            .value
            .trim() !== ""
        &&
        searchResults.length > 0
    ) {

        workingQueue =
            searchResults;

    }


    let currentSearchIndex =
        workingQueue.findIndex(

            song =>
                currentSong &&
                song.src === currentSong.src

        );


    let nextIndex;


    if (
        selectedGod === "mix"
        ||
        shuffleMode
    ) {

        nextIndex =
            randomIndexExcept(
                workingQueue.length,
                currentSearchIndex
            );

    }

    else {

        nextIndex =
            currentSearchIndex < 0
                ? 0
                : (
                    currentSearchIndex + 1
                ) %
                workingQueue.length;

    }


    loadSong(
        workingQueue[nextIndex],
        true
    );

}


/* =========================================================
   PREVIOUS
========================================================= */

function previousSong() {


    if (
        queue.length === 0
    ) {

        return;

    }


    let workingQueue =
        queue;


    const searchResults =
        getSearchResults();


    if (
        searchInput
            .value
            .trim() !== ""
        &&
        searchResults.length > 0
    ) {

        workingQueue =
            searchResults;

    }


    const currentSearchIndex =
        workingQueue.findIndex(

            song =>
                currentSong &&
                song.src === currentSong.src

        );


    if (
        selectedGod === "mix"
        ||
        shuffleMode
    ) {

        const index =
            randomIndexExcept(
                workingQueue.length,
                currentSearchIndex
            );


        loadSong(
            workingQueue[index],
            true
        );


        return;

    }


    let previousIndex;


    if (
        currentSearchIndex <= 0
    ) {

        previousIndex =
            workingQueue.length - 1;

    }

    else {

        previousIndex =
            currentSearchIndex - 1;

    }


    loadSong(
        workingQueue[previousIndex],
        true
    );

}


/* =========================================================
   RANDOM
========================================================= */

function playRandomSong() {


    let workingQueue =
        getSearchResults();


    if (
        workingQueue.length === 0
    ) {

        return;

    }


    const currentSearchIndex =
        workingQueue.findIndex(

            song =>
                currentSong &&
                song.src === currentSong.src

        );


    const index =
        randomIndexExcept(
            workingQueue.length,
            currentSearchIndex
        );


    loadSong(
        workingQueue[index],
        true
    );

}


/* =========================================================
   SONG END
========================================================= */

function handleSongEnded() {


    if (
        repeatMode
    ) {

        audio.currentTime =
            0;


        playAudio();


        return;

    }


    nextSong();

}


/* =========================================================
   SHUFFLE
========================================================= */

function setShuffle(enabled) {


    shuffleMode =
        enabled;


    shuffleBtn
        .classList
        .toggle(
            "active",
            shuffleMode
        );


    shuffleStatus.textContent =
        shuffleMode
            ? "Shuffle On"
            : "Shuffle Off";

}


/* =========================================================
   REPEAT
========================================================= */

function toggleRepeat() {


    repeatMode =
        !repeatMode;


    repeatBtn
        .classList
        .toggle(
            "active",
            repeatMode
        );

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {


    let duration =
        audio.duration;


    let current =
        audio.currentTime;


    if (
        !Number.isFinite(duration)
    ) {

        duration =
            0;

    }


    if (
        !Number.isFinite(current)
    ) {

        current =
            0;

    }


    let percentage =
        0;


    if (
        duration > 0
    ) {

        percentage =
            (
                current /
                duration
            ) *
            100;

    }


    heroProgress.value =
        percentage;


    bottomProgress.value =
        percentage;


    heroCurrentTime.textContent =
        formatTime(
            current
        );


    bottomCurrentTime.textContent =
        formatTime(
            current
        );


    heroDuration.textContent =
        formatTime(
            duration
        );


    bottomDuration.textContent =
        formatTime(
            duration
        );

}


/* =========================================================
   RESET PROGRESS
========================================================= */

function resetProgress() {


    heroProgress.value =
        0;


    bottomProgress.value =
        0;


    heroCurrentTime.textContent =
        "0:00";


    bottomCurrentTime.textContent =
        "0:00";


    heroDuration.textContent =
        "0:00";


    bottomDuration.textContent =
        "0:00";

}


/* =========================================================
   SEEK BAR
========================================================= */

function seekFromProgress(
    percentage
) {


    if (
        !Number.isFinite(
            audio.duration
        )
    ) {

        return;

    }


    audio.currentTime =
        (
            Number(
                percentage
            ) /
            100
        ) *
        audio.duration;

}


/* =========================================================
   SEEK ±10
========================================================= */

function seekBy(seconds) {


    if (
        !Number.isFinite(
            audio.duration
        )
    ) {

        return;

    }


    const target =
        audio.currentTime +
        seconds;


    audio.currentTime =
        Math.max(
            0,
            Math.min(
                audio.duration,
                target
            )
        );

}


/* =========================================================
   PLAY ICONS
========================================================= */

function updatePlayButtons() {


    const icon =
        audio.paused
            ? "▶"
            : "❚❚";


    heroPlayBtn.textContent =
        icon;


    bottomPlayBtn.textContent =
        icon;


    renderSongs();

}


/* =========================================================
   VOLUME
========================================================= */

function changeVolume(
    difference
) {


    audio.muted =
        false;


    let newVolume =
        audio.volume +
        difference;


    newVolume =
        Math.max(
            0,
            Math.min(
                1,
                newVolume
            )
        );


    audio.volume =
        newVolume;


    if (
        newVolume > 0
    ) {

        lastVolume =
            newVolume;

    }


    volumeSlider.value =
        newVolume;


    updateMuteIcon();

}


/* =========================================================
   MUTE
========================================================= */

function toggleMute() {


    if (
        audio.muted
        ||
        audio.volume === 0
    ) {


        audio.muted =
            false;


        if (
            audio.volume === 0
        ) {

            audio.volume =
                lastVolume ||
                0.8;

        }

    }

    else {


        if (
            audio.volume > 0
        ) {

            lastVolume =
                audio.volume;

        }


        audio.muted =
            true;

    }


    volumeSlider.value =
        audio.muted
            ? 0
            : audio.volume;


    updateMuteIcon();

}


function updateMuteIcon() {


    const volume =
        audio.muted
            ? 0
            : audio.volume;


    if (
        volume === 0
    ) {

        muteBtn.textContent =
            "🔇";

    }

    else if (
        volume < 0.5
    ) {

        muteBtn.textContent =
            "🔉";

    }

    else {

        muteBtn.textContent =
            "🔊";

    }

}


/* =========================================================
   KEYBOARD
========================================================= */

function handleKeyboard(event) {


    const active =
        document.activeElement;


    /*
       Search bar me type karte waqt
       sirf ENTER work karega.
       Arrow/Space etc search typing disturb nahi karenge.
    */

    if (
        active &&
        (
            active.tagName === "INPUT"
            ||
            active.tagName === "TEXTAREA"
            ||
            active.isContentEditable
        )
    ) {

        return;

    }


    switch (
        event.code
    ) {


        case "Space":

            event.preventDefault();

            togglePlay();

            break;


        case "ArrowRight":

            event.preventDefault();

            nextSong();

            break;


        case "ArrowLeft":

            event.preventDefault();

            previousSong();

            break;


        case "ArrowUp":

            event.preventDefault();

            changeVolume(
                0.05
            );

            break;


        case "ArrowDown":

            event.preventDefault();

            changeVolume(
                -0.05
            );

            break;


        case "KeyJ":

            event.preventDefault();

            seekBy(
                -10
            );

            break;


        case "KeyL":

            event.preventDefault();

            seekBy(
                10
            );

            break;


        case "KeyM":

            event.preventDefault();

            toggleMute();

            break;


        case "KeyS":

            event.preventDefault();

            setShuffle(
                !shuffleMode
            );

            break;


        case "KeyR":

            event.preventDefault();

            toggleRepeat();

            break;

    }

}


/* =========================================================
   TEMPLE BELL
========================================================= */

function ringBell() {


    const button =
        document.getElementById(
            "bellButton"
        );


    button.classList.remove(
        "ringing"
    );


    void button.offsetWidth;


    button.classList.add(
        "ringing"
    );


    try {


        const AudioContextClass =
            window.AudioContext
            ||
            window.webkitAudioContext;


        const context =
            new AudioContextClass();


        const oscillator1 =
            context.createOscillator();


        const oscillator2 =
            context.createOscillator();


        const gain =
            context.createGain();


        oscillator1.type =
            "sine";


        oscillator2.type =
            "sine";


        oscillator1.frequency
            .setValueAtTime(
                920,
                context.currentTime
            );


        oscillator2.frequency
            .setValueAtTime(
                1380,
                context.currentTime
            );


        oscillator1.frequency
            .exponentialRampToValueAtTime(
                520,
                context.currentTime + 1
            );


        oscillator2.frequency
            .exponentialRampToValueAtTime(
                720,
                context.currentTime + 1
            );


        gain.gain
            .setValueAtTime(
                0.12,
                context.currentTime
            );


        gain.gain
            .exponentialRampToValueAtTime(
                0.001,
                context.currentTime + 1.4
            );


        oscillator1.connect(
            gain
        );


        oscillator2.connect(
            gain
        );


        gain.connect(
            context.destination
        );


        oscillator1.start();


        oscillator2.start();


        oscillator1.stop(
            context.currentTime + 1.4
        );


        oscillator2.stop(
            context.currentTime + 1.4
        );

    }

    catch (
        error
    ) {

        console.log(
            "Bell audio unavailable",
            error
        );

    }

}


/* =========================================================
   AUDIO ERROR
========================================================= */

function handleAudioError() {


    if (
        !currentSong
    ) {

        return;

    }


    console.error(
        "Audio file error:",
        currentSong.src
    );


    heroSongArtist.textContent =
        "Audio file not found";


    bottomArtist.textContent =
        "Audio file error";

}


/* =========================================================
   CLEAR PLAYER
========================================================= */

function clearPlayer() {


    audio.pause();


    audio.removeAttribute(
        "src"
    );


    currentSong =
        null;


    currentIndex =
        -1;


    heroSongCover.textContent =
        "🎶";


    bottomCover.textContent =
        "🎶";


    heroSongTitle.textContent =
        "No songs";


    bottomTitle.textContent =
        "No songs";


    heroSongArtist.textContent =
        "Bhakti Mandir";


    bottomArtist.textContent =
        "Bhakti Mandir";


    resetProgress();


    updatePlayButtons();

}


/* =========================================================
   RANDOM HELPERS
========================================================= */

function randomIndex(
    length
) {


    return Math.floor(
        Math.random() *
        length
    );

}


function randomIndexExcept(
    length,
    excludedIndex
) {


    if (
        length <= 1
    ) {

        return 0;

    }


    let index;


    do {

        index =
            randomIndex(
                length
            );

    }

    while (
        index === excludedIndex
    );


    return index;

}


/* =========================================================
   SHUFFLE ARRAY
========================================================= */

function shuffleArray(
    array
) {


    for (
        let i =
            array.length - 1;

        i > 0;

        i--
    ) {


        const j =
            Math.floor(

                Math.random() *
                (
                    i + 1
                )

            );


        [
            array[i],
            array[j]
        ]
        =
        [
            array[j],
            array[i]
        ];

    }


    return array;

}


/* =========================================================
   FORMAT TIME
========================================================= */

function formatTime(
    seconds
) {


    if (
        !Number.isFinite(
            seconds
        )
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds /
            60
        );


    const remainingSeconds =
        Math.floor(
            seconds %
            60
        )
        .toString()
        .padStart(
            2,
            "0"
        );


    return (
        `${minutes}:${remainingSeconds}`
    );

}