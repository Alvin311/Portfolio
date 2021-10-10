class ExperienceItem {
    constructor(
        public title: string,
        public employer: string,
        public dateFrom: Date,
        public dateTo: Date,
        public points: string[]
    ) {}
}

export default ExperienceItem;