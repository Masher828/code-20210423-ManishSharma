const record  = require('./userRecord.json');
var table ={
    BMI : [],
    Category : [],
    HealthRisk :[]
};
var BMI;
var OverweightCount =0;
record.map(rec=>{
    BMI = rec.WeightKg/(rec.HeightCm/100);
    table.BMI.push(BMI);
    if (BMI<=18.4) {
        table.Category.push("Underweight");
        table.HealthRisk.push("Malnutrition");
    }
    else if (BMI>=18.5 && BMI<=24.9) {
        table.Category.push("Normal weight");
        table.HealthRisk.push("risk Low");
    }
    else if (BMI>=25 && BMI<=29.9) {
        table.Category.push("Overweight");
        table.HealthRisk.push("Enhanced risk");
        OverweightCount+=1;
    }
    else if (BMI>=30 && BMI<=34.9) {
        table.Category.push("Moderately obese");
        table.HealthRisk.push("Medium risk");
    }
    else if (BMI>=35 && BMI<=39.9) {
        table.Category.push("Severely obese");
        table.HealthRisk.push("High risk");
    }
    else if (BMI>=40) {
        table.Category.push("Very severely obese");
        table.HealthRisk.push("Very high risk");
    }
});

console.log(table);

console.log(OverweightCount);
