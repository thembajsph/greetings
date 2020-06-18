
describe("The greetings widget factory function", function () {

    it("should be able set the name of the user", function () {
        let instance = greet();
        instance.setName(name);

        assert.equal(instance.counter(), 1);

    });
    it("should be able get the name of the user", function () {
        let instance = greet();

        instance.setName("Themba")
        instance.setName("Tello")
        instance.setName("Mahlatsi")

        assert.deepEqual(["Themba", "Tello", "Mahlatsi"], instance.getName());

    });

    it("should be able take in a different language and return message", function () {
        let instance = greet();
        var message = instance.language("Isixhosa", "Themba");
        var message2 = instance.language("English", "Themba");
        var message3 = instance.language("Afrikaans", "Sipho");


        assert.equal(message, "Molo, Themba" + " !");
        assert.equal(message2, "Hello, Themba" + " !");
        assert.equal(message3, "Hallo, Sipho" + " !");


    });
    it("should be able count the number of people greeted", function () {
        let instance = greet();
        instance.setName("Sipho");
        instance.setName("Thabiso");
        instance.setName("Tello");

        assert.equal(instance.counter(), 3);


    });
});

