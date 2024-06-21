export function setCookie(cookieName, cookieValue, expiryInDays) {
	let finalCookie = "";
    finalCookie+=cookieName+"="+cookieValue+";";
    finalCookie+="expires=";
    const d = new Date();
    d.setTime(d.getTime() + expiryInDays*24*60*60*1000);
    const expiryInUTC = d.toUTCString();
    finalCookie+=expiryInUTC+";";
    finalCookie+="path=/";
    document.cookie = finalCookie;
}
export function getCookie(cookieName) {
	const allCookies = document.cookie;
    console.log(allCookies);
    const allCookiesArray = allCookies.split(";");
    for(let i=0;i<allCookiesArray.length;i++) {
    	let ca = allCookiesArray[i];
        if(ca[0]===" ") ca = ca.slice(1);
    	if(ca.indexOf(cookieName)===0) {
        	return allCookiesArray[i].slice(cookieName.length+1);
        }
    }
    return null;
}
export function checkCookie() {
	let returnedCookieValue = getCookie("username");
    if(returnedCookieValue) {
    	alert("Hello there, "+returnedCookieValue);
    }
    else {
    	const name = prompt("enter your name", "harry potter");
        alert("Hello there, "+name);
        setCookie("username", name, 3);
    }
}