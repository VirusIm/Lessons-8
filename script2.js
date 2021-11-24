let ladder = {
    step: 0,
    up()
    {
        this.step++
        return this;
    },
    down()
    {
        this.step++
        return this;
    },
    showStep()
    {
        alert("Step "+this.step);
        console.log("Step "+this.step);
    }
}
ladder.up().up().down().showStep();
ladder.down().down().down().showStep();