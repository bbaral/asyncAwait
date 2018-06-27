console.log('Person1: shows ticket');
console.log('Person2: shows ticket');


const preMovie = async () => {

    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
      setTimeout(() => reject('ticket'), 3000);
    });
  
    let ticket;
      try {
        ticket = await person3PromiseToShowTicketWhenWifeArrives;
    } catch(e) {
        ticket = 'sad face';
    }
    return ticket;
  };
  
  preMovie().then((t) => console.log(`person3 shows ${t}`));

  console.log('Person4: shows ticket');
  console.log('Person5: shows ticket');
  console.log('Person6: shows ticket');

  /**
   * I am writing this on master branch
   */

   /**
    * different between fetch and pull
    */

   /**
    * My name is Bikram
    * this should give me some conflict. This is a change in master
    */

    /**
     * This is in a test branch
     */