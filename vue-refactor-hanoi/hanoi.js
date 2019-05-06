var app = new Vue({
    el: '#app',
    data: {
        floors: null,
        floorsA: [],
        floorsB: [],
        floorsC: []
    },
    methods: {
        reset() {
            this.floors = null
            this.floorsA = []
            this.floorsB = []
            this.floorsC = []
        },
        play() {
            this.floorsA = [...new Array(this.floors).keys()]
            console.time("time1")
            this.doHanoi(this.floorsA, this.floorsB, this.floorsC, this.floors)
            console.timeEnd("time1")
        },
        handle() {
            this.floorsA = [...new Array(this.floors).keys()]
        },
        async doHanoi(a, b, c, floor) {
            if (floor > 0) {
                await this.doHanoi(a, c, b, floor - 1)
                await this.move(a, c)
                await this.doHanoi(b, a, c, floor - 1)
            }
        },
        move(a, b) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    b.unshift(a.shift())
                    resolve()
                }, 1000)
            })
        }
    }
})