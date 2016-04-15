$(document).ready(function(){
});

var net = new brain.NeuralNetwork({
  //hiddenLayers: [4],
  //learningRate: 0.6 // global learning rate, useful when training using streams
});
 net.train(datas, {
  //errorThresh: 0.00000353,  // error threshold to reach
  iterations: 20000,   // maximum training iterations
  log: true,           // console.log() progress periodically
  logPeriod: 50,       // number of iterations between logging
  //learningRate: 0.3    // learning rate
})
var output = net.run(
{'Famille Tiers':0.007,'Libelle symptome Interne':0.021,'Constructeur':0.012,'Modèle Horizon':0.065,'Garantie sortante':0.009,'Indice de retour':0.002}
//,output:{'Echange carte mére':1}},
);
console.log(output);
