function detectMobileByUserAgent() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    return true;
  } else {
    return false;
  }
}

if (detectMobileByUserAgent()) {
  alert("Putar HP Anda ke posisi horizontal agar website ini lebih mudah dilihat.");
}
