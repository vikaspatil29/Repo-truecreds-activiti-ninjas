# Discover SmartDID Student Loans 

#### Table of Contents
- [Discover SmartDID Student Loans ](#discover-smartdid-student-loans )
  - [Table of Contents](#table-of-contents)
    - [Acknowledgements](#acknowledgements)
    - [Business Challenge](#business-challenge)
        - [Concept](#concept)
        - [Approach](#approach)
    - [Vernacular](#vernacular)
    - [Assumptions](#assumptions)
    - [Persona](#persona)
    - [Story](#story)
        - [Main Applicatant - Issuance](#todo)
        - [Co-Signer Issuance](#todo)
        - [Main Applicant - Loan Application Flow & Verification](#todo)
        - [Co-Signer - Flow](#todo)
        - [Main Applicant - Loan Approval and Issuance](#todo)
    - [Demo Workflow](#demo-workflow)
    - [Benefits](#benefits)
    - [Related Topics](#related-topics)


## Acknowledgements

1. Trucred Hackathon team for this opportunity and great planning.
2. Avast for their support.

## Business Challenge
Higher Education is a critical stage in one's life and securing the funds to pay for college is emotionally stressful.

The current student loan verification is long process requiring applicants submit many forms of verification document. 

Also, Student Loan fraud is increasing at rapid rate across the globe due to Identity Theft.

### Concept
By leveraging the cryptographically verifiable credentials of Digital Identity, financial institution like Discover can process student loans using the verifiable credentials in Digital Wallets.

This eliminates user providing the required data and Discover performing a verification activity on the data provided. 

Since the data in the digital wallet is provided by Trusted Issuer, Discover can trust the applicant and reduce the loans provided to unknown borrower.

### Approach
SmartDID Student Loan can be implemented using a standards based digital credential as described in the  [Verifiable Credential Trust Triangle](https://trustoverip.github.io/WP0010-toip-foundation-whitepaper/trust/vcred_trust_triangle/). Such a solution must demonstrate all phases of credential definition, credential
generation, credential transfer, wallet storage, and credential verification.

The goal is to demonstrate the end-to-end activities necessary to:

* Main Applicant/Co-Signer be issued credentials in the digital wallet.
* Discover is able to verify the credentials and process the loan application.
* Discover is able to verify the credentials of the co-signer
* Discover is able to apply promotions/offer/compliance based on Identity
* Discover is able to issue the student loan as digital credentials
* Main Applicant/Co-Signer is able to download the loan details as digital credentials into their wallet.

## Vernacular

1. **Digital Wallet**: A financial transaction application that runs on multiple device modalities (mobile, computer). These applications store, manage, and present payment and identity instruments.
0. **Verifier**: An entity involved in the verification of digital credentials.
1. **Issuer**: A entity that makes assertions about information and delivers digital credentials containing attestations about those assertions.
2. **Public Registry**: A public utility that allows for the registration and discovery of Decentralized Identifiers (DIDs).

## Assumptions

1. Use case assumes knowledge of the W3C Standards and Open -source software that supports the concepts outlined by the [Trust over IP Foundation](https://trustoverip.org/toip-model/).
2. Credential Issuer and Verifier Utility solutions are readily available from 3rd party vendors.


## Persona

| Actor                                                                        | Role | Goals                                                                                                                          | Details                                                                                                                                                             |
|------------------------------------------------------------------------------| --- |--------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <img src="./images/john.png" width="40" height="40"> <br> John Doe           | Main Applicant | Applies for Discover Student loan using the credentials in the digital wallet                                                  | Carries a mobile device with a digital wallet containing verifiable credentials from a variety of issuers.                                                          |
| <img src="./images/mike.png" width="40" height="40"> <br> Mike Doe           | Co-Signer | Co-Signs for a Discover Student loan using the credentials in the digital wallet.                                              | Carries a mobile device with a digital wallet containing verifiable credentials from a variety of issuers.                                                          |
| <img src="./images/discover_logo.png" width="40" height="40"> <br>Discover   | Verifier | Ensure that all applicants of a SmartDID student loan meet business policy proof of identity, income, university and benefits. | Exploring use cases that would either eliminate the need to outsource student loan verification or reduce time/cost for doing student loan verification internally. |
| <img src="./images/discover_logo.png" width="40" height="40">  <br>Discover  | Issuer | Upon verification of business policy requirements for student loan, issue a student loan credential.                           | Arm qualified consumers with a digital credential for use with SmartDID Student Loan offering.                                                                      |
| <img src="./images/dmv.png" width="40" height="40"> <br>DMV                  | Issuer | Upon verification of business policy requirements for driving license, issue a driving license credential.                     | Arm qualified consumers with a digital credential for use with SmartDID Student Loan offering.                                             |
| <img src="./images/ssn.png" width="40" height="40"> <br>SSN Office           | Issuer | Upon verification of business policy requirements for SSN, issue a SSN credential                                              | Arm qualified consumers with a digital credential for use with SmartDID Student Loan offering.                                             |
| <img src="./images/passport.jpg" width="40" height="40"> <br>Passport Office | Issuer | Upon verification of business policy requirements for passport, issue a passport credential.                                   | Arm qualified consumers with a digital credential for use with SmartDID Student Loan offering.                                             |
| <img src="./images/irs.jpg" width="40" height="40"> <br>IRS                  | Issuer | Upon verification of business policy requirements for tax filings, issue a IRS ID credential.                                  | Arm qualified consumers with a digital credential for use with SmartDID Student Loan offering.                                             |
| <img src="./images/dod.png" width="40" height="40"> <br>Dept of Defense      | Issuer | Upon verification of business policy requirements for defense duty, issue a defense id credential.                             | Arm qualified consumers with a digital credential for use with SmartDID Student Loan offering.                                             |
| <img src="./images/univ.png" width="40" height="40"> <br>DTA University      | Issuer | Upon verification of business policy requirements for college enrollment, issue a digital college enrollment credential.       | Arm qualified consumers with a digital credential for use with SmartDID Student Loan offering.                                             |

## Story

### Ecosystem Setup
* All issuers register their DID in a public registry.
* All issuers define the schema, credential definition in the public registry.
* <img src="./images/john.png" width="40" height="40">  <img src="./images/mike.png" width="40" height="40"> Mike Doe/John Doe visits the trusted issuers website and requests for digital credentials.
* Issuer website displays a QR Code and instructional text “Scan Request with your Digital Wallet App”.
* <img src="./images/john.png" width="40" height="40">  <img src="./images/mike.png" width="40" height="40">  Mike Doe/John Doe opens the ```Connect.Me``` App on her device and scans the QR code.
* The ```Connect.me``` App prompts <img src="./images/john.png" width="40" height="40"> <img src="./images/mike.png" width="40" height="40"> Mike Doe/John Doe with the message: "{Issuer} is offering the following secure credentials, do you accept?”
* <img src="./images/john.png" width="40" height="40"> <img src="./images/mike.png" width="40" height="40">  Mike Doe/John Doe initiates the process to accept the secure credential.
* Credential is sent to <img src="./images/john.png" width="40" height="40"> <img src="./images/mike.png" width="40" height="40">  Mike Doe's/John Doe's device and protected with the secure element of the device.

### Student Loan Application
* <img src="./images/john.png" width="40" height="40"> John Doe, visits Discover Student <img src="./images/discover_logo.png" width="40" height="40"> website and initiates a student loan application process. 
* The <img src="./images/discover_logo.png" width="40" height="40"> website displays a QR code and instructional text “Scan to submit your loan application with your Digital Wallet App”.
* <img src="./images/john.png" width="40" height="40"> John Doe opens the ```Connect.Me``` App on her device and scans the QR code.
* The ```Connect.me``` App prompts <img src="./images/john.png" width="40" height="40"> John Doe with the message: "<img src="./images/discover_logo.png" width="40" height="40"> is requesting the following secure credentials, do you accept?”
* <img src="./images/john.png" width="40" height="40"> John Doe initiates the process to accept the proof request.
* Proof response is sent to <img src="./images/discover_logo.png" width="40" height="40"> Discover.
* Discover <img src="./images/discover_logo.png" width="40" height="40"> verifies the proof and applies military member benefits to the loan application
* Discover <img src="./images/discover_logo.png" width="40" height="40"> generates loan ID and CoSigner Key
* Discover <img src="./images/discover_logo.png" width="40" height="40"> updates John Doe with loan status and requests for co-signer.

### Co-Sign an existing Loan Application <todo>
* <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica, an <img src="./images/acme-company-logo.png" width="50" height="40"> Acme Enterprise employee, signs in to the employee HR portal provided by <img src="./images/workday.png" width="50" height="40"> Workday.
* <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica sees a new feature to *Generate Secure Credential(s)*.
* The <img src="./images/workday.png" width="50" height="40"> Workday system presents the credential options. The data in this credential schema minimally addresses the proof of employment requirements needed to use password-less authentication with <img src="./images/discover_logo.png" width="80" height="80">.
* <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica selects one or more credentials and clicks OK.
* The <img src="./images/workday.png" width="50" height="40"> Workday software generates a QR code and instructional text “Scan Credentials with your Digital Wallet App”.
* <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica opens her <img src="./images/avast.png" width="60" height="60"> Avast digital wallet, ```Connect.me```, and scans the QR code.
* The ```Connect.me``` App prompts <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica with the messsage: “Workday is offering the following secure credentials, do you accept?”
* <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica initiates the process to accept the offer of secure credentials.
* Credentials are sent to <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica's device and protected with the secure element of the device.

### Download the Student Loan Credentials <todo>
* Some time passes, and <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica desires to register for password-less access to her account with <img src="./images/discover_logo.png" width="80" height="80">.
* <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica visits <img src="./images/discover_logo.png" width="80" height="80"> website and initiates the “Registration” flow.
* The <img src="./images/discover_logo.png" width="80" height="80"> website displays the page requesting the employee’s information, and a new Icon "Register Account using Digital Wallet”.
* <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica clicks the Wallet icon.
* The <img src="./images/discover_logo.png" width="80" height="80"> website displays a QR code and instructional text “Scan Request with your Digital Wallet App”.
* <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica opens the ```Connect.Me``` App on her device and scans the QR code.
* The ```Connect.me``` App prompts <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica with the message: "<img src="./images/discover_logo.png" width="80" height="80"> is requesting proof of employment and government ID. Do you accept?”
* <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica accepts the credential request.
* Using the ```Connect.me``` App, <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica selects the credentials in her wallet that will be used to respond to the request.
* Credentials are securely transferred to and verified by <img src="./images/discover_logo.png" width="80" height="80">.
* The ```Connect.me``` App prompts <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica with the message: <img src="./images/discover_logo.png" width="80" height="80"> is offering the following secure credentials, do you accept?”
* <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica initiates the process to accept the offer of the secure credential.
* Credential is sent to <img src="./images/persona/Angelica.png" width="40" height="40"> Angelica's device and protected with the secure element of the device.

## Demo Workflow
![ecosystem-setup](../../designs/images/uml/1-ecosystem-setup-seq.png)
![student-loan-app](../../designs/images/uml/2-student-loan-app-seq.png)
![Cosigner-app](../../designs/images/uml/3-Cosigner-app-seq.png)
![issue-student-loan](../../designs/images/uml/4-issue-student-loan-seq.png)

## Benefits
1. Consumer: Simple, consistent authentication across all DFS accounts and modalities.
2. Discover: Shared recognition between DFS Systems and Agents regarding the degree of KYC processing already done.
## Related Topics

* How can aspects of this use case be used to improve / advance our existing KYC process?
* Could DFS benefit from the concepts depicted in the [Digital Notary](https://github.com/hyperledger/aries-rfcs/blob/main/features/0116-evidence-exchange/digital_notary_usecase.md) use case outlined by the [evidence protocol for KYC processing](https://github.com/hyperledger/aries-rfcs/tree/main/features/0116-evidence-exchange)?
