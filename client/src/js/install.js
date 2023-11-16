const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    butInstall.style.display = 'block';
    deferredPrompt = event;
    event.preventDefault();
  });

butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
    
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      }
    });

window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully');
  });
