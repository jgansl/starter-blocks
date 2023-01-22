import lozad from 'lozad'

// lazy loads elements with default selector as '.lozad'
console.log('hello')
export default {
    init() {
        const observer = lozad(); 
        observer.observe();

    }, finalize() {

    }
}

// let io  = IntersectionObserver()