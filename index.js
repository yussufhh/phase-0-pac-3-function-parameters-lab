
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

console.log(introduction('Aki')); 
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage('Aki', 'Ember.js'));
function introductionWithLanguageOptiona (name, language){
    
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  

