import utilService from '../services/util.service.js'
import storageService from '../services/storage.service.js'
// import eventBus, {USR_MSG_DISPLAY} from './event-bus.service.js'


const KEY = 'emailsApp';

let gId = 0;
const hardCodedEmails = [

    {
        subject: 'Wedding for anna',
        body: 'lo masne',
        isRead: false,
        id: ++gId,
        sentAt: 3686475774000
    },
    {
        subject: 'Funeral to uncle sam',
        body: 'yesh hakvia colam lavoe',
        isRead: false,
        id: ++gId,
        sentAt: 1000213374000
    },
    {
        subject: 'Happy Birthday to my love',
        body: 'A good party everybody come',
        isRead: false,
        id: ++gId,
        sentAt: 878475774000
    },

]


var mailDB = [];


function getMail() {
    return {
        subject: 'Sprint3',
        body: 'popomukikoki',
        isRead: false,
        id: utilService.getRandomInt(1, 100000),
        sentAt: Date.now()
    }
}

function genMails() {
    for (let index = 0; index < 20; index++) {
        mailDB.push(getMail());
    }
    return mailDB;
}

const loadMails = () => storageService.load(KEY);

function query() {
    var emails = loadMails()
    if (!emails) {
        emails = hardCodedEmails
        storageService.store(KEY, hardCodedEmails)
    }
    return Promise.resolve(emails)
}

function getMailById(id) {
    const mails = loadMails()
    let mail = mails.find(mail => mail.id === id)


    console.log({ id, mail })
    return Promise.resolve(mail)
}

function deleteMail(mailId) {
    var mails =  storageService.load(KEY);
        
            var mailIdx = mails.findIndex(mail => mail.id === mailId);
             mails.splice(mailIdx, 1);
             storageService.store(KEY, mails);
             mails = storageService.load(KEY);
             return mails;      
}

function getUnreadEmails (mails) {
    const unreadsMails = mails.filter(mail => mail.isRead === false);
    return unreadsMails;
}



export default {
    genMails,
    getMailById,
    query,
    deleteMail
}