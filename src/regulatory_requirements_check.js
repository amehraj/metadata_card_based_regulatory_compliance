// Copyright 2025 Tampere University
// This source code is licensed under the MIT license. See LICENSE in the repository root directory.
// Author: Ali Mehraj <ali.mehraj@tuni.fi>

regulatory_requirements_check = () => {

    const regulatoryRequirementsList = fetch_regulation_for_check();
    regulatoryRequirementsList.regulatory_requirements.map((regulatory_requirements) => {

        let regulationChecker = [];

        regulatory_requirements.requirements.map((requirement) => {

            const requirement_target = requirement.target
            const requirement_identifier = requirement.identifier
            const targetCardList = fetch_target_cards(requirement_target, requirement_identifier)

            targetCardList.map((target_card) => {
                const regulatoryRequirementsCheckResult = (matchRegulatoryRequirementsWithCards(target_card, requirement.target_values));
                regulationChecker.push(regulatoryRequirementsCheckResult)

            })

        })

        if(!regulationChecker.includes(false) && regulationChecker.length>0){
            console.log("Regulation Check succeeded for " + regulatory_requirements.id)
        } else {
            console.log("Regulation Check failed for " + regulatory_requirements.id)
        }
        
    })

}

const fs = require('fs');

const fetch_regulation_for_check = () => {
    const rawRegulationData = fs.readFileSync('./regulatory_requirements/regulatory_requirements.json');
    const regulationData = jsonParse (rawRegulationData);
    return regulationData;
}

const jsonParse = (rawData) => {
    const data = JSON.parse(rawData);
    return data;
}

const fetch_target_cards = (requirement_target, requirement_identifier) => {

    const rawTargetCardData = fs.readFileSync('./metadata_cards/'+ requirement_target +'_cards.json');
    const targetCardData = jsonParse (rawTargetCardData);
    const targetCardType = requirement_target + "_cards";
    const targetCardListArray = targetCardData[targetCardType];

    const targetCardDataFiltered = targetCardListArray.filter((target_card) => matchRegulatoryRequirementsWithCards(target_card, requirement_identifier)!==false)

    return targetCardDataFiltered;
}


const matchRegulatoryRequirementsWithCards = (base, subset) => {
    return Object.entries(subset).every(([key, value]) => {
    const baseValue = base[key];
    if (Array.isArray(baseValue)) {
        return arrayCheck(baseValue, value)
    } else if(typeof baseValue === 'object'){
        return objectCheck(baseValue, value)
    }

    return baseValue === value;
  });
}

const arrayCheck = (baseValue, value) => {
    return baseValue.includes(value);
}

const objectCheck = (superset, subset) => {
    return Object.entries(subset).every(([key, value]) => {
        const baseValue = superset[key];
        if (Array.isArray(baseValue)) {
            return arrayCheck(baseValue, value)
        } else if(typeof baseValue === 'object'){
            return objectCheck(baseValue, value)
        }
        return  key in superset && superset[key] === value
    });
}


module.exports = { regulatory_requirements_check };