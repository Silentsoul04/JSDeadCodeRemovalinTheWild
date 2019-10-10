$(function() {

    var welcome_text = new Array();
    welcome_text["bg"] = "<h1>Официален уебсайт на Европейския съюз -<br/><span>Моля, изберете език.</span></h1>";
    welcome_text["cs"] = "<h1>Oficiální internetové stránky Evropské unie -<br/><span>výběr jazyka</span></h1>";
    welcome_text["da"] = "<h1>Den Europæiske Unions officielle websted -<br/><span>Vælg sprog</span></h1>";
    welcome_text["de"] = "<h1>Offizielle Website der Europäischen Union -<br/><span>Bitte wählen Sie eine Sprache</span></h1>";
    welcome_text["et"] = "<h1>Euroopa Liidu ametlik veebisait -<br/><span>Valige palun keel</span></h1>";
    welcome_text["el"] = "<h1>Επίσημος ιστότοπος της Ευρωπαϊκής Ένωσης -<br/><span>Επιλέξτε γλώσσα</span></h1>";
    welcome_text["en"] = "<h1>Official website of the European Union -<br/><span>Please choose a language</span></h1>";
    welcome_text["es"] = "<h1>Web oficial de la Unión Europea -<br/><span>Elija una lengua</span></h1>";
    welcome_text["fr"] = "<h1>Site web officiel de l'Union européenne -<br/><span>Veuillez choisir une langue</span></h1>";
    welcome_text["ga"] = "<h1>Suíomh gréasáin oifigiúil an Aontais Eorpaigh -<br/><span>Roghnaigh teanga, le do thoil</span></h1>";
    welcome_text["hr"] = "<h1>Službene web-stranice Europske unije –<br/><span>Odaberite jezik</span></h1>";
    welcome_text["it"] = "<h1>Sito ufficiale dell'Unione europea -<br/><span>Scegli una lingua</span></h1>";
    welcome_text["lt"] = "<h1>Oficiali Europos Sąjungos interneto svetainė -<br/><span>Pasirinkite kalbą</span></h1>";
    welcome_text["lv"] = "<h1>Eiropas Savienības oficiālā tīmekļa vietne -<br/><span>lūdzu, izvēlieties valodu</span></h1>";
    welcome_text["hu"] = "<h1>Az Európai Unió hivatalos honlapja -<br/><span>Válasszon nyelvet!</span></h1>";
    welcome_text["mt"] = "<h1>Websajt uffiċjali tal-Unjoni Ewropea -<br/><span>Jekk jogħġbok agħżel il-lingwa</span></h1>";
    welcome_text["nl"] = "<h1>Officiële website van de Europese Unie -<br/><span>Kies uw taal</span></h1>";
    welcome_text["pl"] = "<h1>Oficjalny portal Unii Europejskiej -<br/><span>Proszę wybrać język</span></h1>";
    welcome_text["pt"] = "<h1>Sítio Web oficial da União Europeia -<br/><span>Escolha uma língua</span></h1>";
    welcome_text["ro"] = "<h1>Site-ul oficial al Uniunii Europene -<br/><span>Selectaţi limba</span></h1>";
    welcome_text["sk"] = "<h1>Oficiálna webová lokalita Európskej únie -<br/><span>Výber jazyka</span></h1>";
    welcome_text["sl"] = "<h1>Uradno spletišče Evropske unije -<br/><span>Izberite jezik</span></h1>";
    welcome_text["fi"] = "<h1>EU:n virallinen verkkosivusto -<br/><span>Valitse kieli</span></h1>";
    welcome_text["sv"] = "<h1>Officiell EU-webbplats -<br/><span>vänligen välj språk</span></h1>";

    $('.langsel').find('a').bind('mouseover', function() {

        $('#welcome_message').html(welcome_text[$(this).attr('lang')]);

    })

});