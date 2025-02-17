## SM - Sport Management

**Anno Scolastico**: 2024/2025
**Studente**: Attene Davide
**Istituto Scolastico**: I.T.T. "Attilio Deffenu" Olbia
<hr>
 <br>

## Descrizione

Il progetto **SM - Sport Management** mira alla realizzazione di una **Web App Responsive** per un'associazione sportiva.

Le attività da svolgere, i task assegnati fanno riferimento al seguente **progetto**: [PCTO - Deffenu Informatica 2024/2025 ](https://github.com/users/aleattene/projects/3/)

Le principali funzionalità implementate includono:
- Gestione **anagrafiche** (atleti, allenatori, medici sportivi)
- Gestione **documentale** (certificazioni medico sportive)
- Gestione **pagamenti** (compensi allenatori)
<br>

  

## Struttura 

Di seguito una breve descrizione della struttura del progetto:

| **Cartella/File** | **Descrizione** |
|--|--|
| **`backup`** | Contiene cartelle e file iniziali *(in eliminazione a breve)*. |
|**`public`**| File statici pubblici (ad esempio il logo Vite.|
|**`src`**| Directory contenente il codice sorgente principale.|
|**`assets`**| Contenente immagini e loghi.|
|**`components`**| Directory contenente i componenti React (riutilizzabili), ovvero Bottoni, Dashboard, Tabelle, Form, Sidebar, Header, Logo e Layout Principale.|
|**`pages`**|Directory contenente tutte le pagine dell'applicazione, ovvero Homepage, Atleti, Allenatori, Medici Sportivi, Certificati Medici e Compensi.|
|**`services`**| Contenente le chiamate CRUD alle API (`athletes`, `trainers`, `sport-doctors`, `payments` e `sport-certificates`) esposte dal Backend dell'applicazione.| 
|**`App.jsx`**| Componente Radice dell'applicativo React |
|**`main.jsx`** | File di inizializzazione dell'applicativo React |
|**`index.html`**| Entrypoint dell'applicazione |
|**`eslint.config.js`** | File contenente le policy di configurazione di ESLint |
|**`.gitignore`** | File contenente nomi ed estensione di file e directory che si vuole non vengano |
|**`package.json`** | File contenente tutte le dipendenze di progetto | 
|**`README.md`** | File contenente la descrizione e tutte le linee guida del progetto |
|**`vite.config.js`**| File contenente le configurazioni di Vite |
  

<br>

## Avvio del Progetto

**Clonare il Repository**
```bash
git clone https://github.com/username/pcto-deffenu-informatica-frontend.git
cd pcto-deffenu-informatica-frontend
````

**Crearere il file `.env.local` nella root del progetto con le seguenti Variabili d'ambiente:**
```bash
# URL dell'API per lo sviluppo
VITE_API_BASE_URL_DEV=http://localhost:8000/

# URL dell'API per la produzione
VITE_API_BASE_URL_PROD=

# Altre variabili di configurazione
VITE_DEBUG_MODE=false
```

**Installare le Dipendenze**
```bash
npm install
```

**Avviare l'ambiente di Sviluppo **
```bash
npm run dev
```

Nota: *Affinchè le API forniscano i dati all'applicazione che ne fa richiesta è necessario verificare che anche il Server Web del Backend sia correttamente avviato.* 


<br>

## Contribuzione

Trattandosi di un progetto open-source è **aperto anche a contribuzioni esterne**. Se qualcuno fosse interessato, dopo aver creato una **issue** nel presente repository, può **attendere l'assegnazione del task** ed eventualmente procedere poi con l'implementazione di quanto approvato.

Per prima cosa effettuare il **fork del repository** e clonarlo localmente con il seguente comando:

```bash
# HTTPS
git clone https://github.com/username/pcto-deffenu-informatica-frontend.git
```
oppure

```bash
SSH
git clone git@github.com:username/pcto-deffenu-informatica-frontend.git
```

Questo comando genererà una folder con lo stesso nome del repository all'interno del quale spostarsi con il comando:

```bash
cd pcto-deffenu-informatica-frontend
```

Avviare quindi il proprio IDE per visualizzare la **codebase** del progetto. Per contribuire creare immediatamente un **nuovo branch** partendo dal 'main' (branch principale) con il comando:

```bash
git checkout -b username-feature-da-implementare
```

A questo punto ci si troverà posizionati direttamente nel nuovo branch, e sarà pertanto possibile **apportare** tutte le **modifiche** o nuove **feature** desiderate. Nel momento in cui si vuole far si che queste possano entrare a far parte della codebase, procedere nel seguente modo:

```bash
# Usare iterativamente lo stesso comando per tutti i file modificati
git add nome-file-modificato
```
 
E' anche possibile adottare un comando che ne permette l'aggiunta automatica di tutti i file, ma bisogna prestare maggiore attenzione in quanto saranno aggiunti all'area di staging tutti i file, inclusi magari quelli che non dovrebbero. Il comando è il seguente:
```bash
# Prestare la massima attenzione
git add .
```
Successivamente è quindi possibile effettuare il **commit** dei file con il seguente comando:

```bash
git commit -m "messaggio-di-commit"
```

ed infine **inviare** il tutto al proprio **repository remoto** (di cui si è fatto precedentemente il fork) con il comando:

```bash
git push origin username-feature-da-implementare
```

Andare quindi al **proprio repository remoto**, ed aprire una **Pull Request** (bottone verde **Compare and Pull Request**) dal branch `username-feature-da-implementare`del proprio repository verso il `main` del repository originale.

Attendere quindi che la **PR** venga **approvata**, **rifiutata** o richieda **modifiche** da apportare.

Se **approvata**, recarsi nuovamente nel proprio repository remoto ed effettuare la **sincronizzazione** del proprio `main` con quello del repository originale (dove è stato effettuato il merge della Pull Request).

Viceversa se vengono richieste delle **modifiche**, recarsi nuovamente nel proprio **branch locale**, effettuare le **modifiche** richieste ed **eseguire nuovamente** i comandi `add` , `commit` and `push` al fine di integrare la Pull Request con quanto precedentemente richiesto.

<br>

  
## Manuale Utente

Questa sezione descrive le modalità di utilizzo dell’applicazione web SM - Sport Management, progettata per facilitare la gestione di un' associazione sportiva. L’obiettivo di questo sezione è quindi quello di fornire agli utenti (in particolare amministratori e utenti-staff) tutte le inidicazioni principali per l’utilizzo corretto ed efficace dell’applicazione.

#### Homepage

La prima pagina che si trova ad affrontare l'utente è l’homepage, ovvero una pagina dal design accattivante che invita tramite il bottone `GET STARTED` ad entrare all’interno dell’area di lavoro dell'applicazione vera e propria.

[HomePage Desktop]

L'applicazione ha un design responsive, quindi adatta a essere utilizzata in ambito Desktop e Mobile, nel secondo caso sia in ambito Tablete che Smartphone.

{Homepage Responsive)

*E' sempre possibile tornare all'homepage dall'interno dell'applicazione cliccando sul logo dell'applicazione stessa.*


#### Atleti

Una volta entrati nell'applicazione si viene subito indirizzati alla Pagina di Visualizzazione Atleti.

[IMG Visualizzazione Atleti]

Come si può osservare la pagina Atleti mostra l’elenco degli atleti già inseriti in precedenza (se presenti, altrimenti si viene invitati solo ad inserirne di nuovi), con la possibilità di modificarli o eliminarli in qualunque momento, tramite gli opportuni bottoni di Modifica ed Eliminazione.
Naturalmente tramite il bottone Aggiungi Atleta, si può anche inserire un nuovo atleta, compilando con i dati dell’atleta da aggiungere il Form che verrà visualizzato nella pagina successiva, come di seguito mostrato.

[IMG form insert]

Si tratta dello stesso form mostrato in maniera analoga per la modifica dei dati di un atleta, con la differenza che in un caso (inserimento) i campi del form risultano vuoti, quindi tutti da compilare, mentre nel secondo (modifica) sono pre-compilati con  la possibilità ognuno di modifica o nuova compilazione. 


### Allenatori

Dalla Sidebar laterale, cliccando sulla relativa voce è possibile accedere alla pagina di visualizzazione degli Allenatori.

Anche in questo caso la pagina mostra l’elenco degli allenatori precedentemente inseriti (se presenti, altrimenti si viene invitati solo ad inserirne di nuovi), con la possibilità di modificarli o eliminarli in qualunque momento, tramite gli opportuni bottoni di Modifica ed Eliminazione. Tramite il bottone Aggiungi Allenatore, si può sempre inserire un nuovo allenatore, compilando il Form che verrà visualizzato nella pagina successiva, come di seguito mostrato.

[IMG form insert]

Come accaduto per gli atleti anche in questo caso si tratta dello stesso form mostrato nel caso della modifica di un allenatore, con la sola differenza che in un caso (inserimento) tutti i campi del form risultano vuoti e quindi da compilare, mentre nel secondo (modifica) sono pre-compilati, ognuno con la possibilità di modifica o nuova compilazione. 


#### Medici Sportivi

Vale quanto descritto nella sezione Allenatori, sostituendo alla parola allenatore, la parola medico sportivo.


#### Compensi

Vale quanto descritto nella sezione Allenatori, sostituendo alla parola allenatore, la parola compenso.


#### Certificati Medico Sportivi

Vale quanto descritto nella sezione Allenatori, sostituendo alla parola allenatore, la parola certificato medico sportivo.


#### Header e Sidebar

La sidebar ha una doppia modalità implementativa, ovvero sempre visibile nei device di medio-grandi dimensioni mente scompare nei device di piccole dimensioni.
Quando non più visibile può essere sempre richiamata dal `hamburger button` presente nell'header, che contrariamente alla sidebar resta sempre visibile seppur adatta le proprie dimensioni a quelle del device da cui si sta consultando l'applicazione.



## Licenza

Per questa tipologia di progetto, è stata scelta la licenza **MIT**: https://en.wikipedia.org/wiki/MIT_License
  
<br>
