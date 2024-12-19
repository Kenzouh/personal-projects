const express = require('express'); // Lets us route in Views folder.
const path = require('path');

const app = express();

// Serves the static files and 'views' & 'partials' make the CSS connectivity work
app.use(express.static(path.join(__dirname, 'views', 'partials')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views', 'monthsPage')));

app.use(express.static(path.join(__dirname, 'views', 'holidaysPage')));

app.use('/img', express.static(path.join(__dirname, 'views/partials/holidaysPage/img')));

// Home Page
app.get('/calendar', (req, res) => {
    res.render('index');
});

// To access the specific pages of months — in this instance, it's January.
app.get('/calendar/january', (req, res) => {
    res.render('partials/monthsPage/january');
});

app.get('/calendar/february', (req, res) => {
    res.render('partials/monthsPage/february');
});

app.get('/calendar/march', (req, res) => {
    res.render('partials/monthsPage/march');
});

app.get('/calendar/april', (req, res) => {
    res.render('partials/monthsPage/april');
});

app.get('/calendar/may', (req, res) => {
    res.render('partials/monthsPage/may');
});

app.get('/calendar/june', (req, res) => {
    res.render('partials/monthsPage/june');
});

app.get('/calendar/july', (req, res) => {
    res.render('partials/monthsPage/july');
});

app.get('/calendar/august', (req, res) => {
    res.render('partials/monthsPage/august');
});

app.get('/calendar/september', (req, res) => {
    res.render('partials/monthsPage/september');
});

app.get('/calendar/october', (req, res) => {
    res.render('partials/monthsPage/october');
});

app.get('/calendar/november', (req, res) => {
    res.render('partials/monthsPage/november');
});

app.get('/calendar/december', (req, res) => {
    res.render('partials/monthsPage/december');
});

// ======== Holidays ========

// January
app.get('/calendar/january/newyear', (req, res) => {
    res.render('partials/holidaysPage/h1_jan1_newYear');
});

app.get('/calendar/january/prwd', (req, res) => {
    res.render('partials/holidaysPage/h2_jan23_prwd');
});

app.get('/calendar/january/lailatul', (req, res) => {
    res.render('partials/holidaysPage/h3_jan27_lailatul');
});

app.get('/calendar/january/lunarNewYear', (req, res) => {
    res.render('partials/holidaysPage/h4_jan29_lunarNewYear');
});

// February
app.get('/calendar/february/peoplePower', (req, res) => {
    res.render('partials/holidaysPage/h5_feb25_peoplePower');
});

// March
app.get('/calendar/march/ramadan', (req, res) => {
    res.render('partials/holidaysPage/h6_mar1_ramadan');
});

app.get('/calendar/march/marchEquinox', (req, res) => {
    res.render('partials/holidaysPage/h7_mar20_marchEquinox');
});

app.get('/calendar/march/eidulFitar', (req, res) => {
    res.render('partials/holidaysPage/h8_mar31_eidulFitar');
});

// April
app.get('/calendar/april/theDayOfValor', (req, res) => {
    res.render('partials/holidaysPage/h9_apr9_theDayOfValor');
});

app.get('/calendar/april/maundyThursday', (req, res) => {
    res.render('partials/holidaysPage/h10_apr17_maundyThursday');
});

app.get('/calendar/april/goodFriday', (req, res) => {
    res.render('partials/holidaysPage/h11_apr18_goodFriday');
});

app.get('/calendar/april/blackSaturday', (req, res) => {
    res.render('partials/holidaysPage/h12_apr19_blackSaturday');
});

app.get('/calendar/april/easterSunday', (req, res) => {
    res.render('partials/holidaysPage/h13_apr20_easterSunday');
});

// May
app.get('/calendar/may/laborDay', (req, res) => {
    res.render('partials/holidaysPage/h14_may1_laborDay');
});

// June
app.get('/calendar/june/eidAlAdha', (req, res) => {
    res.render('partials/holidaysPage/h15_jun7_eidAlAdha');
});

app.get('/calendar/june/eidAlAdhaDay2', (req, res) => {
    res.render('partials/holidaysPage/h16_jun8_eidAlAdhaDay2');
});

app.get('/calendar/june/independenceDay', (req, res) => {
    res.render('partials/holidaysPage/h17_jun12_independenceDay');
});

app.get('/calendar/june/juneSolstice', (req, res) => {
    res.render('partials/holidaysPage/h18_jun21_juneSolstice');
});

app.get('/calendar/june/amunJadid', (req, res) => {
    res.render('partials/holidaysPage/h19_jun27_amunJadid');
});

// August
app.get('/calendar/august/ninoyAquinoDay', (req, res) => {
    res.render('partials/holidaysPage/h20_aug21_ninoyAquinoDay');
});

app.get('/calendar/august/nationalHeroesDay', (req, res) => {
    res.render('partials/holidaysPage/h21_aug25_nationalHeroesDay');
});

// September
app.get('/calendar/september/yamashitaSurrenderDay', (req, res) => {
    res.render('partials/holidaysPage/h22_sep3_ysd');
});

app.get('/calendar/september/maulidUnNabi', (req, res) => {
    res.render('partials/holidaysPage/h23_sep5_maulidUnNabi');
});

app.get('/calendar/september/feastOfTheNativityOfMary', (req, res) => {
    res.render('partials/holidaysPage/h24_sep8_nativityOfMary');
});

app.get('/calendar/september/septemberEquinox', (req, res) => {
    res.render('partials/holidaysPage/h25_sep23_septemberEquinox');
});

// November
app.get('/calendar/november/allSaintsDay', (req, res) => {
    res.render('partials/holidaysPage/h26_nov1_allSaintsDay');
});

app.get('/calendar/november/allSoulsDay', (req, res) => {
    res.render('partials/holidaysPage/h27_nov2_allSoulsDay');
});

app.get('/calendar/november/bonifacioDay', (req, res) => {
    res.render('partials/holidaysPage/h28_nov30_bonifacioDay');
});

// December
app.get('/calendar/december/feastOfTheImmaculateConception', (req, res) => {
    res.render('partials/holidaysPage/h29_dec8_immaculateConception');
});

app.get('/calendar/december/decemberSolstice', (req, res) => {
    res.render('partials/holidaysPage/h30_dec21_decemberSolstice');
});

app.get('/calendar/december/christmasEve', (req, res) => {
    res.render('partials/holidaysPage/h31_dec24_christmasEve');
});

app.get('/calendar/december/christmas', (req, res) => {
    res.render('partials/holidaysPage/h32_dec25_christmas');
});

app.get('/calendar/december/rizalDay', (req, res) => {
    res.render('partials/holidaysPage/h33_dec30_rizalDay');
});

app.get('/calendar/december/newYearsEve', (req, res) => {
    res.render('partials/holidaysPage/h34_dec31_newYearsEve');
});




app.listen(3000, () => {
    console.log("Running on port 3000!");
    console.log("http://localhost:3000/calendar");
});