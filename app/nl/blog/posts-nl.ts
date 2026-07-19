// Dutch blog posts (eerlijk, koopintentie). Bodies zijn vertrouwde, zelfgeschreven
// HTML als template literals. Los van de Engelse posts — dit is originele NL-content.
import type { Post } from '../../blog/posts';

export const POSTS_NL: Post[] = [
  {
    slug: 'ontgroeid-je-bedrijf-spreadsheets',
    title: 'Wanneer je bedrijf spreadsheets ontgroeit — en wat je in plaats daarvan bouwt',
    dek: 'Spreadsheets draaien het halve MKB — tot ze stilletjes de bottleneck worden. Zo weet je wanneer het tijd is, en wat ze echt vervangt.',
    description:
      'Hoe je weet dat je spreadsheets een risico zijn geworden — fouten, versiechaos, geen rechten, die ene collega die het snapt — en wat voor maatwerk-tool ze vervangt, zonder te veel te bouwen.',
    date: '2026-07-12',
    readingTime: '7 min leestijd',
    body: `
<p>Bijna elk groeiend bedrijf draait op spreadsheets. Ze zijn gratis, iedereen kan ermee overweg, en ze doen vrolijk dingen waar geen software ooit voor ontworpen is. Juist daarom ontgroei je ze zonder het te merken — de spreadsheet blijft werken, tot hij de stille bottleneck wordt waar het hele bedrijf over struikelt.</p>
<p>Zo herken je dat je die grens gepasseerd bent, en wat je eraan doet zonder te veel te bouwen.</p>

<h2>De signalen dat het tijd is</h2>
<p>Je hebt ze niet allemaal nodig — twee of drie kost je meestal al echt geld en tijd:</p>
<ul>
  <li><strong>Meer dan één persoon bewerkt hem.</strong> Zodra twee mensen aan hetzelfde blad zitten, krijg je versieconflicten, overschreven rijen en &quot;wacht, welke kopie klopt?&quot; Spreadsheets kennen geen wie-wat-wijzigde.</li>
  <li><strong>Je kopieert-plakt tussen bladen.</strong> Is je proces &quot;exporteren hier, plakken daar, opmaken,&quot; dan ben jij de integratielaag geworden — met de hand, elke dag, met de foutmarge die daarbij hoort.</li>
  <li><strong>Eén persoon snapt het als enige.</strong> Het magische blad met de geneste formules dat alleen Sara onderhoudt is een single point of failure in een vriendelijk jasje. Als Sara op vakantie is, vertraagt het bedrijf.</li>
  <li><strong>Fouten worden duur.</strong> Een verkeerde celverwijzing of een vertypt getal dat stilletjes doorstroomt naar een factuur of order. Spreadsheets valideren niets — ze laten je &quot;banaan&quot; in een prijsveld typen.</li>
  <li><strong>Iedereen ziet alles.</strong> Geen rollen, geen rechten. De stagiair ziet (en verwijdert) dezelfde data als de finance-lead. Prima bij vijf man, een echt probleem bij vijftien.</li>
  <li><strong>Rapporteren is handwerk.</strong> Als de maandcijfers een middag VERT.ZOEKEN en draaitabellen kosten die iemand elke keer opnieuw doet, betaal je salaris voor werk dat software in één klik zou doen.</li>
</ul>

<h2>Waarom spreadsheets stukgaan op schaal</h2>
<p>Het is niet dat spreadsheets slecht zijn — ze zijn briljant. Het is dat ze gebouwd zijn voor <em>berekenen</em>, niet om het systeem te zijn waar meerdere mensen een bedrijf op draaien. Ze hebben geen validatie (niets houdt slechte data tegen), geen rollen (iedereen is admin), geen audittrail (geen record van wie wat wanneer wijzigde) en geen echte gelijktijdigheid (twee bewerkingen botsen). Voor een huishoudboekje maakt dat niets uit. Als het blad je <em>operatie</em> ís, maakt het alles uit.</p>
<blockquote>Een spreadsheet faalt niet luid. Hij verandert langzaam in een fulltime baan die niemand is aangenomen om te doen.</blockquote>

<h2>Wat je in plaats daarvan bouwt</h2>
<p>Het goede nieuws: je hoeft een spreadsheet bijna nooit te vervangen door iets enorms. Wat hem vervangt is meestal een gericht intern tool — een simpele app waar de data in een echte database staat en de software de regels afdwingt die de spreadsheet niet kon:</p>
<ul>
  <li><strong>Validatie</strong> — de juiste velden, het juiste formaat; geen &quot;banaan&quot; in een prijsveld.</li>
  <li><strong>Rollen &amp; rechten</strong> — mensen zien en doen alleen wat hun functie nodig heeft.</li>
  <li><strong>Eén bron van waarheid</strong> — geen &quot;definitief_v3_ECHTdefinitief.xlsx&quot; meer; iedereen kijkt naar dezelfde live data.</li>
  <li><strong>Rapportage ingebouwd</strong> — de cijfers die je nu met de hand herleidt worden een scherm dat altijd actueel is.</li>
  <li><strong>Een audittrail</strong> — wie wijzigde wat, wanneer. Onbetaalbaar de eerste keer dat er iets misgaat.</li>
</ul>
<p>Vaak is dat een klant- of ops-<a href="/nl/diensten/">dashboard of intern tool</a> — precies het soort gerichte, greenfield build dat past bij een vaste prijs en een vaste deadline.</p>

<h2>Wanneer je de spreadsheet houdt</h2>
<p>Eerlijk? Haast je niet met bouwen. Een spreadsheet is het juiste gereedschap als het proces nog wekelijks verandert, als maar één persoon hem gebruikt, of als de inzet laag is. Software bouwen om een werkwijze vast te leggen die je nog aan het uitvogelen bent, maakt de verkeerde werkwijze alleen permanent. Bewijs het proces eerst met de hand; bouw het als het stabiel is en duidelijk dragend.</p>

<h2>Hoe wij het zouden aanpakken</h2>
<p>We nemen de spreadsheet waar je nu in leeft als de spec — het is het bewijs van precies hoe je werkt — en bouwen het gerichte tool dat hem vervangt, tegen een vaste prijs op een vaste deadline, met elke vrijdag een werkende demo zodat je je eigen proces tot leven ziet komen. Alleen greenfield, productieklaar, en je bezit alles.</p>
<p>Is jouw spreadsheet stilletjes een baan op zich geworden? Dat is iets goeds om mee te nemen naar een <a href="/nl/afspraak/">kennismakingsgesprek</a> — we vertellen je eerlijk of het tijd is om te bouwen, of dat je meer ruimte in het blad hebt dan je denkt.</p>
`,
  },
  {
    slug: 'maatwerksoftware-vs-standaardpakket',
    title: 'Maatwerksoftware vs. standaardpakket: een eerlijke gids',
    dek: 'We bouwen maatwerksoftware voor de kost. Neem het dus zoals bedoeld: we vertellen je graag wanneer je het juist níét moet doen.',
    description:
      'Een eerlijke kijk van een maatwerk-studio op wanneer je moet bouwen of kopen. Geen salespraatje — het echte beslissingskader, inclusief wanneer een standaardpakket de slimmere keuze is.',
    date: '2026-07-12',
    readingTime: '6 min leestijd',
    body: `
<p>&quot;Zelf bouwen of kopen?&quot; is een van de duurste vragen die een groeiend bedrijf verkeerd beantwoordt — in beide richtingen. Koop het verkeerde pakket en je buigt je bedrijf jarenlang rond software die net niet past. Bouw het verkeerde en je stopt een budget in een tool die een abonnement van €40 per maand ook had opgelost.</p>
<p>Er is geen universeel antwoord, maar er is wel een betrouwbare manier om te beslissen. Dit is het kader dat we echt gebruiken met de bedrijven die bij ons komen — inclusief de keren dat het ze wegleidt van een maatwerk-build.</p>

<h2>Begin bij de juiste standaard: koop het</h2>
<p>Past een standaardpakket echt bij hoe je werkt, koop het dan. Punt. Het is goedkoper vooraf, meteen live, en iemand anders onderhoudt het, fixt de bugs en levert de verbeteringen. Voor boekhouding, e-mail, CRM, projectmanagement, e-commerce-basis — de markt is volwassen en de producten zijn goed.</p>
<p>Maatwerk verdient zijn plek pas als &quot;past echt&quot; niet meer waar is. De echte vraag is dus niet &quot;maatwerk of standaard?&quot; Het is: <strong>hoeveel buig jíj om bij de tool te passen?</strong></p>

<h2>De test die er echt toe doet: wie buigt?</h2>
<p>Kijk wat er gebeurt als je een standaardpakket laat werken. Er zijn maar twee mogelijkheden:</p>
<ul>
  <li><strong>De tool ondersteunt hoe je werkt.</strong> Je configureert hem, leert hem, en gaat door met je dag. Goede match — blijf kopen.</li>
  <li><strong>Jij verandert hoe je werkt om bij de tool te passen.</strong> Je voegt handmatige stappen toe, houdt &quot;ernaast&quot; een spreadsheet bij, of zegt tegen personeel &quot;negeer dat veld gewoon.&quot; Dat is de tool die je bedrijf buigt — en dat stapelt stilletjes op, voor altijd.</li>
</ul>
<p>Een beetje buigen is normaal en prima. Wordt het buigen het werk — als je proces nu de software dient in plaats van andersom — dan is dat het signaal dat maatwerk een serieuze blik waard is.</p>

<h2>Wanneer maatwerk echt wint</h2>
<p>In onze ervaring komt het neer op een handvol eerlijke signalen. Zijn er meerdere waar, dan is bouwen waarschijnlijk gerechtvaardigd:</p>
<ul>
  <li><strong>Je proces is echt ongewoon.</strong> Niet &quot;we doen het graag op onze manier&quot; — écht ongewoon. Als standaardtools de kern van hoe je werkt telkens missen, is dat gat precies wat maatwerk vult.</li>
  <li><strong>De tool die je nodig hebt bestaat niet.</strong> Je hebt goed gezocht en er is geen product voor — of het dichtstbijzijnde is drie tools met plakband aan elkaar.</li>
  <li><strong>De integraties zijn er niet.</strong> De systemen die met elkaar zouden moeten praten doen dat niet, en jij bent de menselijke API die data met de hand verplaatst.</li>
  <li><strong>De software <em>ís</em> het voordeel.</strong> Als hoe je orders afhandelt of klanten bedient een echt onderscheid maakt, is het bezitten van die software meer waard dan een versie huren die iedereen ook heeft.</li>
</ul>

<h2>Wanneer maatwerk een fout is</h2>
<p>Net zo eerlijk — wanneer we je aanraden weg te lopen van een build:</p>
<ul>
  <li><strong>Je hebt het proces nog niet gevalideerd.</strong> Software bouwen om een werkwijze vast te leggen die je nog uitvogelt, maakt de verkeerde permanent. Bewijs het eerst met de hand.</li>
  <li><strong>Je wilt het &quot;perfect&quot;.</strong> Perfect is een budget zonder bodem. Maatwerk beloont heldere prioriteiten, geen eindeloos polijsten.</li>
  <li><strong>Je ontwijkt eigenlijk verandermanagement.</strong> Soms past een standaardtool prima en gaat de weerstand over mensen, niet software. Nieuwe software lost dat niet op — het kost alleen meer.</li>
</ul>

<blockquote>Het doel was nooit &quot;maatwerksoftware.&quot; Het doel is de uitkomst. Maatwerk is één manier om daar te komen — soms de beste, vaak niet.</blockquote>

<h2>Hoe wij het zouden aanpakken</h2>
<p>Wij bouwen maatwerksoftware — websites, webapps, MVP&apos;s, portals, dashboards, integraties — tegen een vaste prijs op een vaste deadline. Maar het eerste gesprek is diagnostisch, geen pitch. Is een standaardtool de slimmere keuze, dan zeggen we dat en wijzen we je erheen. We kunnen maar twee klanten tegelijk aannemen, dus we besteden die plek liever aan de juiste match dan iemand een build aan te praten die hij niet nodig heeft.</p>
<p>Twijfel je tussen bouwen en kopen? Dat is precies waar een <a href="/nl/afspraak/">kennismakingsgesprek</a> voor is — je krijgt een eerlijk antwoord, inclusief &quot;koop dit in plaats daarvan&quot; als dat de waarheid is.</p>
`,
  },
];

export const getPostNL = (slug: string) => POSTS_NL.find((p) => p.slug === slug);

export function prettyDateNL(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}
