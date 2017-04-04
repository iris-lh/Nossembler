# Nossembly

Nossembly is a little assembly-like toy language I threw together in the throes of a feverish spell of sleep-deprived engrossment.

Its Node.js implementation is part simulated CPU, part Turing Machine, and all good brow-furrowing fun for the whole family.

The "Nossembler" has:
- Three registers, two for performing arithmetic operations and one for staging data to be written

- A moveable cursor that can read from and write to the "tape"

- The ability to know when it has "run off the rails," so to speak

- Cutting edge logic operators such as "JGZ," "JLZ," and more

- And a suite of high-level helper functions to make your life more comfortable!

Further more, in the coming months, it shall be my solemn, nay, my *sacred* duty as principle architect of the Nossembler and the Nossembly Programming Language to provide all the resources and documentation one might need to dive right in with this state of the art virtual device.

So what are you waiting for? There's a whole world of personal computing just waiting to be discovered out there, and I just know that the Nossembler is the perfect companion with which to explore this brave new world they call *"Cyberspace."*

## Operations
- ### `MOV <int>`
Moves the cursor forward or backward in the data storage `<int>` number of cells.

- ### `LDA`
Loads the value of the currently selected cell into register A.

- ### `LDB`
Loads the value of the currently selected cell into register B.

- ### `SAV`
Writes the value of register C to the curently selected cell.

- ### `SWPA`
Swaps the values of registers C and A.

- ### `SWPB`
Swaps the values of registers C and B.

- ### `ADD`
Adds registers A and B and writes the result to register C.

- ### `SUBA`
Subtracts register A from register B and writes the result to register C.

- ### `SUBB`
Subtracts register B from register A and writes the result to register C.

- ### `INC`
Increments the value of register C by one.

- ### `DEC`
Decrements the value of register C by one.

- ### `JMP <int>`
Moves the program counter forward or backward in the program.

- ### `JGZ <int>`
Moves the program counter forward or backward in the program if the value of register C is greater than zero.

- ### `JLZ <int>`
Moves the program counter forward or backward in the program if the value of register C is less than zero.

- ### `JEZ <int>`
Moves the program counter forward or backward in the program if the value of register C is equal to zero.

- ### `JNZ <int>`
Moves the program counter forward or backward in the program if the value of register C is not equal to zero.
