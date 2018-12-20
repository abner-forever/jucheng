import _ from 'lodash'

const api = {
    addTickets({ id, name='演唱会', price, num = 1 }) {
        //模拟后端
        return new Promise(resolve => {
            setTimeout(async () => {
                let { tickets } = await this.getCartTickets()

                //判断是否存在
                let ticket = _.find(tickets, item => item.id === id)
                if (ticket) {
                    ticket.num += num
                } else {
                    tickets.push({
                        id, name, price, num
                    })
                }
                this.updateCartTickets(tickets)
                resolve({ code: 200, tickets })
            }, 200)
        })

    },

    getCartTickets() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    code: 200,
                    tickets: localStorage.tickets ? JSON.parse(localStorage.tickets) : []
                })
            }, 10)
        })
    },
    updateCartTickets(tickets) {
        localStorage.tickets = JSON.stringify(tickets)
    }
}

export default api