/* ---------- Écrans « Les brèves du sport » ----------
   Affichés entre deux tirages en mode Auto 5 min.
   Chaque écran est dessiné en 1920 × 1080 puis mis à l'échelle de l'écran TV.
   Pour changer un écran, il suffit de modifier son HTML ci-dessous. */

const SLIDES = [
  // Football – Ligue des nations
  `<div style="position: relative; overflow: hidden; width: 1920px; height: 1080px; box-sizing: border-box; background: #FFFFFF; color: #14125A; font-family: Nunito, sans-serif; display: flex; flex-direction: column; padding: 64px 96px; gap: 32px">
<div aria-hidden="true" style="position: absolute; right: -180px; top: -220px; width: 720px; height: 720px; border-radius: 50%; background: #2E7CF6; opacity: 0.18"></div>
<div aria-hidden="true" style="position: absolute; right: 260px; top: -120px; width: 300px; height: 300px; border-radius: 50%; background: #FFD21F; opacity: 0.16"></div>
<div aria-hidden="true" style="position: absolute; right: 110px; top: 210px; width: 150px; height: 150px; border-radius: 50%; background: #E3262B; opacity: 0.9"></div>
<div style="position: relative; display: flex; justify-content: space-between; align-items: center">
<div style="display: flex; align-items: center; gap: 22px">
<div style="background: #FFD21F; color: #14125A; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 38px; padding: 6px 30px; border-radius: 999px">FOOTBALL</div>
<div style="font-size: 34px; font-weight: 800; letter-spacing: 2px; color: #4E4B94">LIGUE DES NATIONS · GROUPE A1</div>
</div>
<div style="background: #E3262B; color: #FFFFFF; font-family: 'Baloo 2', sans-serif; font-size: 32px; font-weight: 800; letter-spacing: 1px; padding: 6px 28px; border-radius: 999px">LES BRÈVES DU SPORT</div>
</div>
<div style="position: relative; display: flex; flex-direction: column; gap: 10px">
<h1 style="margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 132px; line-height: 0.95">Les Bleus tombent<br>en Italie</h1>
<p style="margin: 0; font-size: 42px; font-weight: 700; color: #33307A">Première défaite de l’ère Zidane : Olise ouvre le score, Esposito (×2) et Frattesi renversent tout.</p>
</div>
<div style="position: relative; display: flex; gap: 56px; margin-top: auto; align-items: flex-end">
<div style="flex: 1; display: flex; flex-direction: column; gap: 16px">
<div style="font-size: 32px; font-weight: 800; letter-spacing: 1px; color: #4E4B94">JEUDI 12 NOVEMBRE</div>
<div style="display: flex; align-items: center; gap: 18px; background: #ECEBFA; border-radius: 999px; padding: 10px 14px 10px 36px; font-size: 44px; font-weight: 800"><span style="flex: 1">Italie</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 50px">3</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 50px">1</span><span style="flex: 1; text-align: right; padding-right: 22px">France</span></div>
<div style="display: flex; align-items: center; gap: 18px; background: #ECEBFA; border-radius: 999px; padding: 10px 14px 10px 36px; font-size: 44px; font-weight: 800"><span style="flex: 1">Turquie</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 50px">1</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 50px">2</span><span style="flex: 1; text-align: right; padding-right: 22px">Belgique</span></div>
</div>
<div style="width: 560px; display: flex; flex-direction: column; gap: 16px">
<div style="font-size: 32px; font-weight: 800; letter-spacing: 1px; color: #4E4B94">CLASSEMENT</div>
<div style="display: flex; align-items: center; justify-content: space-between; background: #ECEBFA; border-radius: 999px; padding: 10px 14px 10px 36px; font-size: 40px; font-weight: 800"><span>1. Italie</span><span style="width: 76px; height: 76px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 40px">10</span></div>
<div style="display: flex; align-items: center; justify-content: space-between; background: #ECEBFA; border-radius: 999px; padding: 10px 14px 10px 36px; font-size: 40px; font-weight: 800"><span>2. France</span><span style="width: 76px; height: 76px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 40px">10</span></div>
<div style="display: flex; align-items: center; justify-content: space-between; background: #ECEBFA; border-radius: 999px; padding: 10px 14px 10px 36px; font-size: 40px; font-weight: 800"><span>3. Belgique</span><span style="width: 76px; height: 76px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 40px">9</span></div>
</div>
</div>
<div style="position: relative; display: flex; justify-content: space-between; align-items: center; background: #2E7CF6; color: #FFFFFF; border-radius: 999px; padding: 18px 36px; font-size: 40px; font-weight: 800"><span>Dimanche 15 nov. · France – Turquie</span><span>un nul suffit pour les quarts</span></div>
</div>`,
  // Rugby – XV de France
  `<div style="position: relative; overflow: hidden; width: 1920px; height: 1080px; box-sizing: border-box; background: #FFFFFF; color: #14125A; font-family: Nunito, sans-serif; display: flex; flex-direction: column; padding: 64px 96px; gap: 32px">
<div aria-hidden="true" style="position: absolute; right: -180px; top: -220px; width: 720px; height: 720px; border-radius: 50%; background: #2E7CF6; opacity: 0.18"></div>
<div aria-hidden="true" style="position: absolute; right: 260px; top: -120px; width: 300px; height: 300px; border-radius: 50%; background: #FFD21F; opacity: 0.16"></div>
<div aria-hidden="true" style="position: absolute; right: 110px; top: 210px; width: 150px; height: 150px; border-radius: 50%; background: #E3262B; opacity: 0.9"></div>
<div style="position: relative; display: flex; justify-content: space-between; align-items: center">
<div style="display: flex; align-items: center; gap: 22px">
<div style="background: #FFD21F; color: #14125A; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 38px; padding: 6px 30px; border-radius: 999px">RUGBY</div>
<div style="font-size: 34px; font-weight: 800; letter-spacing: 2px; color: #4E4B94">XV DE FRANCE · CHAMPIONNAT DES NATIONS</div>
</div>
<div style="background: #E3262B; color: #FFFFFF; font-family: 'Baloo 2', sans-serif; font-size: 32px; font-weight: 800; letter-spacing: 1px; padding: 6px 28px; border-radius: 999px">LES BRÈVES DU SPORT</div>
</div>
<div style="position: relative; display: flex; flex-direction: column; gap: 10px">
<h1 style="margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 132px; line-height: 0.95">Les Bleus défient<br>les Springboks</h1>
<p style="margin: 0; font-size: 42px; font-weight: 700; color: #33307A">Après le carton face aux Fidji, place au choc au Stade de France, sans Ntamack, blessé.</p>
</div>
<div style="position: relative; display: flex; flex-direction: column; gap: 16px; margin-top: auto">
<div style="display: flex; align-items: center; gap: 18px; background: #ECEBFA; border-radius: 999px; padding: 10px 14px 10px 36px; font-size: 42px; font-weight: 800"><span style="flex: 1">France</span><span style="width: 84px; height: 84px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 44px">54</span><span style="width: 84px; height: 84px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 44px">17</span><span style="flex: 1; text-align: right; padding-right: 22px">Fidji · 8 essais à Lyon</span></div>
<div style="display: flex; justify-content: space-between; align-items: center; background: #2E7CF6; color: #FFFFFF; border-radius: 999px; padding: 20px 36px; font-size: 42px; font-weight: 800"><span>France – Afrique du Sud</span><span>vendredi 13 nov. · 21 h 10</span></div>
<div style="display: flex; justify-content: space-between; align-items: center; background: #ECEBFA; border-radius: 999px; padding: 20px 36px; font-size: 42px; font-weight: 800"><span>France – Argentine</span><span style="color: #1F5FD1">samedi 21 nov. · 21 h 10</span></div>
<div style="display: flex; justify-content: space-between; align-items: center; background: #ECEBFA; border-radius: 999px; padding: 20px 36px; font-size: 42px; font-weight: 800"><span>Finals Weekend à Londres</span><span style="color: #1F5FD1">27 › 29 nov.</span></div>
</div>
</div>`,
  // Tennis – ATP Finals
  `<div style="position: relative; overflow: hidden; width: 1920px; height: 1080px; box-sizing: border-box; background: #FFFFFF; color: #14125A; font-family: Nunito, sans-serif; display: flex; flex-direction: column; padding: 64px 96px; gap: 32px">
<div aria-hidden="true" style="position: absolute; right: -180px; top: -220px; width: 720px; height: 720px; border-radius: 50%; background: #2E7CF6; opacity: 0.18"></div>
<div aria-hidden="true" style="position: absolute; right: 260px; top: -120px; width: 300px; height: 300px; border-radius: 50%; background: #FFD21F; opacity: 0.16"></div>
<div aria-hidden="true" style="position: absolute; right: 110px; top: 210px; width: 150px; height: 150px; border-radius: 50%; background: #E3262B; opacity: 0.9"></div>
<div style="position: relative; display: flex; justify-content: space-between; align-items: center">
<div style="display: flex; align-items: center; gap: 22px">
<div style="background: #FFD21F; color: #14125A; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 38px; padding: 6px 30px; border-radius: 999px">TENNIS</div>
<div style="font-size: 34px; font-weight: 800; letter-spacing: 2px; color: #4E4B94">ATP FINALS · TURIN</div>
</div>
<div style="background: #E3262B; color: #FFFFFF; font-family: 'Baloo 2', sans-serif; font-size: 32px; font-weight: 800; letter-spacing: 1px; padding: 6px 28px; border-radius: 999px">LES BRÈVES DU SPORT</div>
</div>
<div style="position: relative; display: flex; flex-direction: column; gap: 10px">
<h1 style="margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 132px; line-height: 0.95">Arthur Fils au<br>Masters de Turin</h1>
<p style="margin: 0; font-size: 42px; font-weight: 700; color: #33307A">Premier Français qualifié depuis Gaël Monfils en 2016, parmi les 8 meilleurs de la saison.</p>
</div>
<div style="position: relative; display: flex; gap: 64px; margin-top: auto; align-items: center">
<div style="display: flex; flex-direction: column; align-items: center; gap: 14px">
<div style="display: flex; align-items: center; gap: 14px">
<div style="width: 170px; height: 170px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 96px">15</div>
<div style="font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 64px; color: #4E4B94">›</div>
<div style="width: 170px; height: 170px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 96px">22</div>
</div>
<div style="font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 50px">NOVEMBRE</div>
</div>
<div style="flex: 1; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 24px; row-gap: 14px">
<div style="background: #ECEBFA; border-radius: 999px; padding: 14px 32px; font-size: 38px; font-weight: 800">Alexander Zverev</div>
<div style="background: #ECEBFA; border-radius: 999px; padding: 14px 32px; font-size: 38px; font-weight: 800">Carlos Alcaraz</div>
<div style="background: #ECEBFA; border-radius: 999px; padding: 14px 32px; font-size: 38px; font-weight: 800">Ben Shelton</div>
<div style="background: #ECEBFA; border-radius: 999px; padding: 14px 32px; font-size: 38px; font-weight: 800">Daniil Medvedev</div>
<div style="background: #ECEBFA; border-radius: 999px; padding: 14px 32px; font-size: 38px; font-weight: 800">Flavio Cobolli</div>
<div style="background: #2E7CF6; color: #FFFFFF; border-radius: 999px; padding: 14px 32px; font-size: 38px; font-weight: 800">Arthur Fils</div>
<div style="background: #ECEBFA; border-radius: 999px; padding: 14px 32px; font-size: 38px; font-weight: 800">Frances Tiafoe</div>
<div style="background: #ECEBFA; border-radius: 999px; padding: 14px 32px; font-size: 38px; font-weight: 800">Rafael Jodar</div>
</div>
</div>
<div style="position: relative; font-size: 32px; font-weight: 800; letter-spacing: 1px; color: #4E4B94">DEUX GROUPES DE QUATRE · DEMI-FINALES LE 21 · FINALE LE DIMANCHE 22 NOVEMBRE</div>
</div>`,
  // Hippisme – Auteuil
  `<div style="position: relative; overflow: hidden; width: 1920px; height: 1080px; box-sizing: border-box; background: #FFFFFF; color: #14125A; font-family: Nunito, sans-serif; display: flex; flex-direction: column; padding: 64px 96px; gap: 32px">
<div aria-hidden="true" style="position: absolute; right: -180px; top: -220px; width: 720px; height: 720px; border-radius: 50%; background: #2E7CF6; opacity: 0.18"></div>
<div aria-hidden="true" style="position: absolute; right: 260px; top: -120px; width: 300px; height: 300px; border-radius: 50%; background: #FFD21F; opacity: 0.16"></div>
<div aria-hidden="true" style="position: absolute; right: 110px; top: 210px; width: 150px; height: 150px; border-radius: 50%; background: #E3262B; opacity: 0.9"></div>
<div style="position: relative; display: flex; justify-content: space-between; align-items: center">
<div style="display: flex; align-items: center; gap: 22px">
<div style="background: #FFD21F; color: #14125A; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 38px; padding: 6px 30px; border-radius: 999px">COURSES HIPPIQUES</div>
<div style="font-size: 34px; font-weight: 800; letter-spacing: 2px; color: #4E4B94">AUTEUIL · 14 ET 15 NOVEMBRE</div>
</div>
<div style="background: #E3262B; color: #FFFFFF; font-family: 'Baloo 2', sans-serif; font-size: 32px; font-weight: 800; letter-spacing: 1px; padding: 6px 28px; border-radius: 999px">LES BRÈVES DU SPORT</div>
</div>
<div style="position: relative; display: flex; flex-direction: column; gap: 10px">
<h1 style="margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 132px; line-height: 0.95">Les 48 heures<br>de l’obstacle</h1>
<p style="margin: 0; font-size: 42px; font-weight: 700; color: #33307A">Seize courses et cinq Groupes 1 ce week-end à Auteuil.</p>
</div>
<div style="position: relative; display: flex; flex-direction: column; gap: 16px; margin-top: auto">
<div style="display: flex; align-items: center; gap: 30px; background: #ECEBFA; border-radius: 999px; padding: 12px 36px 12px 14px; font-size: 42px; font-weight: 800"><span style="width: 88px; height: 88px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 40px">SAM</span><span style="flex: 1">Grand Prix d’Automne · haies</span><span style="color: #1F5FD1">16 h 07</span></div>
<div style="display: flex; align-items: center; gap: 30px; background: #ECEBFA; border-radius: 999px; padding: 12px 36px 12px 14px; font-size: 42px; font-weight: 800"><span style="width: 88px; height: 88px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 40px">DIM</span><span style="flex: 1">Prix La Haye Jousselin · steeple</span><span style="color: #1F5FD1">5 500 m</span></div>
<div style="display: flex; align-items: center; gap: 30px; background: #2E7CF6; color: #FFFFFF; border-radius: 999px; padding: 12px 36px 12px 14px; font-size: 40px; font-weight: 800"><span style="width: 88px; height: 88px; border-radius: 50%; background: #FFFFFF; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 54px">1</span><span>Jeudi à Vincennes, Frank Gio remporte le Prix Marcel Laurent</span></div>
</div>
</div>`,
  // Curling – Europe et Masters
  `<div style="position: relative; overflow: hidden; width: 1920px; height: 1080px; box-sizing: border-box; background: #FFFFFF; color: #14125A; font-family: Nunito, sans-serif; display: flex; flex-direction: column; padding: 64px 96px; gap: 32px">
<div aria-hidden="true" style="position: absolute; right: -180px; top: -220px; width: 720px; height: 720px; border-radius: 50%; background: #2E7CF6; opacity: 0.18"></div>
<div aria-hidden="true" style="position: absolute; right: 260px; top: -120px; width: 300px; height: 300px; border-radius: 50%; background: #FFD21F; opacity: 0.16"></div>
<div aria-hidden="true" style="position: absolute; right: 110px; top: 210px; width: 150px; height: 150px; border-radius: 50%; background: #E3262B; opacity: 0.9"></div>
<div style="position: relative; display: flex; justify-content: space-between; align-items: center">
<div style="display: flex; align-items: center; gap: 22px">
<div style="background: #FFD21F; color: #14125A; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 38px; padding: 6px 30px; border-radius: 999px">CURLING</div>
<div style="font-size: 34px; font-weight: 800; letter-spacing: 2px; color: #4E4B94">EUROPE · OSTRAVA ET MASTERS · MEDICINE HAT</div>
</div>
<div style="background: #E3262B; color: #FFFFFF; font-family: 'Baloo 2', sans-serif; font-size: 32px; font-weight: 800; letter-spacing: 1px; padding: 6px 28px; border-radius: 999px">LES BRÈVES DU SPORT</div>
</div>
<div style="position: relative; display: flex; flex-direction: column; gap: 10px">
<h1 style="margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 132px; line-height: 0.95">L’Écosse reine<br>de l’Europe</h1>
<p style="margin: 0; font-size: 42px; font-weight: 700; color: #33307A">Sacrée d’une pierre face à l’Italie, avant un Masters canadien perdu sur le fil.</p>
</div>
<div style="position: relative; display: flex; flex-direction: column; gap: 16px; margin-top: auto">
<div style="display: flex; align-items: center; gap: 18px; background: #ECEBFA; border-radius: 999px; padding: 10px 14px 10px 36px; font-size: 42px; font-weight: 800"><span style="width: 330px; font-size: 32px; color: #4E4B94">FINALE EURO</span><span style="flex: 1">Écosse</span><span style="width: 84px; height: 84px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 46px">6</span><span style="width: 84px; height: 84px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 46px">5</span><span style="flex: 1; text-align: right; padding-right: 22px">Italie</span></div>
<div style="display: flex; align-items: center; gap: 18px; background: #ECEBFA; border-radius: 999px; padding: 10px 14px 10px 36px; font-size: 42px; font-weight: 800"><span style="width: 330px; font-size: 32px; color: #4E4B94">BRONZE EURO</span><span style="flex: 1">Suède</span><span style="width: 84px; height: 84px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 46px">6</span><span style="width: 84px; height: 84px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 46px">4</span><span style="flex: 1; text-align: right; padding-right: 22px">Tchéquie</span></div>
<div style="display: flex; align-items: center; gap: 18px; background: #ECEBFA; border-radius: 999px; padding: 10px 14px 10px 36px; font-size: 42px; font-weight: 800"><span style="width: 330px; font-size: 32px; color: #4E4B94">FINALE MASTERS</span><span style="flex: 1">Dunstone (CAN)</span><span style="width: 84px; height: 84px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 46px">7</span><span style="width: 84px; height: 84px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 46px">6</span><span style="flex: 1; text-align: right; padding-right: 22px">Mouat (SCO)</span></div>
</div>
<div style="position: relative; font-size: 32px; font-weight: 800; letter-spacing: 1px; color: #4E4B94">TOURNOI MASCULIN · CHAMPIONNATS D’EUROPE DU 27 OCT. AU 1ER NOV., MASTERS DU 3 AU 8 NOV.</div>
</div>`,
  // Basket – NBA
  `<div style="position: relative; overflow: hidden; width: 1920px; height: 1080px; box-sizing: border-box; background: #FFFFFF; color: #14125A; font-family: Nunito, sans-serif; display: flex; flex-direction: column; padding: 64px 96px; gap: 32px">
<div aria-hidden="true" style="position: absolute; right: -180px; top: -220px; width: 720px; height: 720px; border-radius: 50%; background: #2E7CF6; opacity: 0.18"></div>
<div aria-hidden="true" style="position: absolute; right: 260px; top: -120px; width: 300px; height: 300px; border-radius: 50%; background: #FFD21F; opacity: 0.16"></div>
<div aria-hidden="true" style="position: absolute; right: 110px; top: 210px; width: 150px; height: 150px; border-radius: 50%; background: #E3262B; opacity: 0.9"></div>
<div style="position: relative; display: flex; justify-content: space-between; align-items: center">
<div style="display: flex; align-items: center; gap: 22px">
<div style="background: #FFD21F; color: #14125A; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 38px; padding: 6px 30px; border-radius: 999px">BASKET</div>
<div style="font-size: 34px; font-weight: 800; letter-spacing: 2px; color: #4E4B94">NBA · NUIT DU 11 AU 12 NOVEMBRE</div>
</div>
<div style="background: #E3262B; color: #FFFFFF; font-family: 'Baloo 2', sans-serif; font-size: 32px; font-weight: 800; letter-spacing: 1px; padding: 6px 28px; border-radius: 999px">LES BRÈVES DU SPORT</div>
</div>
<div style="position: relative; display: flex; flex-direction: column; gap: 10px">
<h1 style="margin: 0; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 132px; line-height: 0.95">Wemby et les Spurs,<br>10 victoires de rang</h1>
<p style="margin: 0; font-size: 42px; font-weight: 700; color: #33307A">32 points et 5 contres pour Wembanyama, San Antonio remonte 22 points face à Chicago.</p>
</div>
<div style="position: relative; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 56px; row-gap: 16px; margin-top: auto">
<div style="display: flex; align-items: center; gap: 16px; background: #ECEBFA; border-radius: 999px; padding: 8px 12px 8px 36px; font-size: 38px; font-weight: 800"><span style="flex: 1">San Antonio</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">124</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">119</span><span style="flex: 1; text-align: right; padding-right: 22px">Chicago</span></div>
<div style="display: flex; align-items: center; gap: 16px; background: #ECEBFA; border-radius: 999px; padding: 8px 12px 8px 36px; font-size: 38px; font-weight: 800"><span style="flex: 1">LA Lakers</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">123</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">112</span><span style="flex: 1; text-align: right; padding-right: 22px">Milwaukee</span></div>
<div style="display: flex; align-items: center; gap: 16px; background: #ECEBFA; border-radius: 999px; padding: 8px 12px 8px 36px; font-size: 38px; font-weight: 800"><span style="flex: 1">Houston</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">115</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">108</span><span style="flex: 1; text-align: right; padding-right: 22px">Golden State</span></div>
<div style="display: flex; align-items: center; gap: 16px; background: #ECEBFA; border-radius: 999px; padding: 8px 12px 8px 36px; font-size: 38px; font-weight: 800"><span style="flex: 1">Portland</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">118</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">108</span><span style="flex: 1; text-align: right; padding-right: 22px">Oklahoma City</span></div>
<div style="display: flex; align-items: center; gap: 16px; background: #ECEBFA; border-radius: 999px; padding: 8px 12px 8px 36px; font-size: 38px; font-weight: 800"><span style="flex: 1">Boston</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">98</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">93</span><span style="flex: 1; text-align: right; padding-right: 22px">Toronto</span></div>
<div style="display: flex; align-items: center; gap: 16px; background: #ECEBFA; border-radius: 999px; padding: 8px 12px 8px 36px; font-size: 38px; font-weight: 800"><span style="flex: 1">Cleveland</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #2E7CF6; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">115</span><span style="width: 88px; height: 88px; border-radius: 50%; background: #FFD21F; color: #14125A; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 38px">107</span><span style="flex: 1; text-align: right; padding-right: 22px">New York</span></div>
</div>
<div style="position: relative; font-size: 32px; font-weight: 800; letter-spacing: 1px; color: #4E4B94">MEILLEUR BILAN · LES LAKERS (11-2) · À L’EST, BOSTON (10-2)</div>
</div>`,
];

function renderSlide(html) {
  return `<div class="sl-canvas">${html}</div>`;
}
