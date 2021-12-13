var deactivateNewRoundLinkInBackendInit = function() {
    // delete new (review) round link from workflow stage. The journal only wishes to have one review round.
    // console.log("deactivateNewRoundLinkInBackendInit() v = 1");
    if (document.querySelector('body').classList.contains('pkp_page_workflow')) {
        //console.log("(1) body.pkp_page_workflow found!");
        var now = Math.floor(Date.now());
        window.setTimeout(function() {deactivateNewRoundLinkInBackend(now)}, 250);

    }
}

function deactivateNewRoundLinkInBackend(start) {
    var now = Math.floor(Date.now());
    var maxtime = 5000; // try to find .pkp_linkaction_newRound for maxtime milliseconds
    var end = start + maxtime;
    var elapsed = now - start;
    var new_round_link = document.querySelector('.pkp_linkaction_newRound');
    //console.log("new_round_link: " + new_round_link);
    //console.log("start: " + start);
    //console.log("now: " + now);
    //console.log("end: " + end);
    //console.log("elapsed: " + elapsed);
    
    if (new_round_link != null) {
        //console.log("(2) .pkp_linkaction_newRound found!!");
        //new_round_link.setAttribute('disabled','disabled');
        //new_round_link.removeAttribute('href');
        var lang=document.querySelector('html').getAttribute('lang');
        var deactivated_text = ' (deactivated for this journal in theme)';
        if (lang == 'nb-NO') {
        //    console.log("lang='nb-NO'");
            deactivated_text = ' (deaktivert for dette tidsskriftet i theme)';
        }
        var deactivated_new_review_round_text = new_round_link.textContent + deactivated_text;
        var deactivated_new_round_el = document.createElement('span');
        deactivated_new_round_el.setAttribute('style', 'color:gray;font-weight:bold;padding:0 .5rem;');
        new_round_link.parentElement.appendChild(deactivated_new_round_el);
        deactivated_new_round_el.textContent = deactivated_new_review_round_text;
        // deactivated_new_round_link.disabled=true;
        //console.log("(3) deleting new review round link...");
        new_round_link.parentElement.removeChild(new_round_link);

    } else {
        if(elapsed < maxtime) {
            window.setTimeout(function() {deactivateNewRoundLinkInBackend(start)}, 25);
        } else {
        //    console.log("Timeout after " + maxtime + "ms!");
        }
    }
}

window.addEventListener('load', deactivateNewRoundLinkInBackendInit, false);

//deactivateNewRoundLinkInBackend();