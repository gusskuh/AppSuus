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


// function getMail() {
//     return {
//         subject: 'Sprint3',
//         body: 'popomukikoki',
//         isRead: false,
//         id: utilService.getRandomInt(1, 100000),
//         sentAt: Date.now()
//     }
// }

const loadMails = () => storageService.load(KEY);

function query(filter = null) {
    var emails = loadMails()
    if (filter && filter.filterBy === 'read') filter.filterBy = true
    if (filter && filter.filterBy === 'unread') filter.filterBy = false
    emails = hardCodedEmails
    storageService.store(KEY, hardCodedEmails)
    if (filter && filter.filterBy !== 'all') emails = emails.filter(email => {
        return (email.subject.toLowerCase().includes(filter.text.toLowerCase()) &&
            email.isRead === filter.filterBy)
    })
    else if (filter && filter.filterBy === 'all') emails = emails.filter(email => {
        return (email.subject.toLowerCase().includes(filter.text.toLowerCase()))
    })
    return Promise.resolve(emails)
}

function addMail(newMail){
    var mails= loadMails();
    newMail.id=mails.length+1;
    mails.push(newMail);
    console.log('asdsadsadsda',mails);
    storageService.store(KEY, mails)
    return mails;

}

function getMailById(id) {
    const mails = loadMails()
    let mail = mails.find(mail => mail.id === id)


    return Promise.resolve(mail)
}

export default {
    getMailById,
    query,
    addMail
}