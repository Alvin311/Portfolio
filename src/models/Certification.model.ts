class Certification {
    constructor(
        public name: string,
        public certifier: string,
        public dateReceived: Date,
        public imageSrc?: string,
        public link?: string,
    ) {}
}

export default Certification;