## Metadata Card-based Analysis of Software Systems for Regulatory Compliance Check

**Author**: Ali Mehraj

**Organization**: Tampere University

**Version:** 1.0


## Description

Utilization of metadata cards to describe software elements. Metadata cards are analyzed using regulatory requirements cards.


## Hardware requirements

The application is developed using Node.js (https://nodejs.org/en/download), tested on version 22.19.0.

## How to run:

First run "npm install" to install all the dependencies using the node package manager. Then start the application with the command "npm start"

## File structure 

metadata_card folder has all the different metadata cards that describe different software elements. All metadata cards are represented in JSON format. regulatory_requirements folder has one file called regulatory_requirements.json that has all the regulatory requirements required to be checked for compliance.

## Metadata card structure

The structure of Data Cards is derived from Google's Data Card Template [1]. The structure of the AI Model cards in our approach is derived from the updated Model Card template from a previous research [2] which was based on the Google’s Model Card Template [3]. The strcuture of software component cards and user cards can vary depending on organization, domain, the type of software it represents. As example, the software component and user cards are created by the author and represent a hospital scenario.

## Regulatory requirements structure and how it works

A single regulatory requirements card may encompass several regulatory requirements. Each regulatory requirement has three attributes. The first attribute is target. Target defines the specific software element to which the regulation is aimed. In our analysis approach, this can take the form of an AI model, data, or software components. The second attribute is 'identifier'. The identifier is the key to identifying qualifying software elements. Identifier is a tool that enables users to filter the metadata card set selected by the target based on the identifier value. Multiple identifiers can be used. For instance, if the target is set to 'software components' and the identifier is set to 'action: add records', then all software components with an action of 'add records' will qualify for the compliance check. The third and final attribute is target values. Target values refer to the specific requirements that each qualifying element is required to fulfil in order to successfully complete the compliance check. An optional attribute called reference is available. This reference attribute indicates a reference to the regulations that the regulatory requirements are part of. The application initiates by checking all the regulatory requirements one by one. The application then lists all regulatory requirements that passed or failed and prints the information on the console.

## Customizing your regulatory checks and metadata cards

By following the syntax of regulatory requirements, new requirements can be added with different targets, identifiers, and target values. The application supports checking of JSON objects, arrays, and values. In addition, we have also added support for adding new metadata cards to check regulatory requirements for a new software element. 
For example, if we want to have a new metadata card called 'connector', we need to create a new file: connector_cards.json under the metadata cards folder. Inside the connector_cards.json file the file would need to be initiated with { connector_cards= [] }, with the array representing a blank array of connector_cards. The connector cards then can be added as objects inside the array. On the other hand, to check the connector cards for compliance, the target in the regulatory requirements need to be set to target = "connector", then the identifier and target values can be set as required, and then running the application should verify the requirements as long as the syntax and structure is followed. The creation of new metadata cards is a manual process but we aim to automate the process in the future versions. 


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## References

[1] Pushkarna, M., Zaldivar, A., Kjartansson, O.: Data cards: Purposeful and trans- parent dataset documentation for responsible ai. In: Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency. pp. 1776–1826 (2022)

[2] Mehraj, A., Cao, A., Systä, K., Mikkonen, T., Kotilainen, P., Hästbacka, D., Mäkitalo, N.: Ai model cards: State of the art and path to automated use. In: Proceedings of the 21st International Conference on Web Information Systems and Technologies - WEBIST. pp. 71–82. INSTICC, SciTePress (2025). https://doi.org/10.5220/0013706600003985

[3] Mitchell, M., Wu, S., Zaldivar, A., Barnes, P., Vasserman, L., Hutchinson, B., Spitzer, E., Raji, I.D., Gebru, T.: Model cards for model reporting. In: Proceedings of the conference on fairness, accountability, and transparency. pp. 220–229 (2019)
