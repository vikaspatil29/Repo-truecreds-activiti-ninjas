'use strict'

const express = require('express')
const cors = require('cors');
require('dotenv').config()

// Initialize express app
const app = express()
app.use(express.json())

const PORT = 3003

app.post('/create', async (req, res) => {
	    //res.send("About verify");
	    console.log(req.body);


		res.setHeader('Access-Control-Allow-Origin', '*');
	    res.json({student_loan_id: '12345',
			           cosigner_key: 'H-A-C-K'
		               });

});

app.post('/create-cosigner', async (req, res) => {
	//res.send("About verify");
	console.log(req.body);


	res.setHeader('Access-Control-Allow-Origin', '*');
	res.json({student_loan_id: '12345',
		cosigner_key: 'H-A-C-K'
	});

});

app.get('/main', async (req, res) => {

	//console.log(req.query.id);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.json({first_name: 'John',
		            last_name: 'Doe',
		            address: '123 HACK STREET',
		            zipcode: '11199',
		            phone: '223331123',
		            email: 'hackers@trucreds.com',
		            college_name: 'Discover DTA University',
		            college_state: 'Illinois',
		            college_course_type: 'Undergraduate',
		            college_course_name: 'Bachelor of Science',
		            ssn: '111223331',
		            dod_id: '1111',
		            affiliation: 'Navy',
		            benefits_number: '123',
		            rank: '1',
		            date_of_birth: '10/10/1997',
		            active_duty_indicator: 'false',
		            discover_account_no: "1111111",
		            discover_account_type: 'Student Loan'
	});

});

app.get('/co-signer', async (req, res) => {

	console.log(req.query.id);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.json({first_name: 'Mike',
					last_name: 'Doe',
					address: '123 HACK STREET',
					zipcode: '11199',
					email: 'hackers@trucreds.com',
					college_name: 'Discover DTA University',
					college_state: 'Illinois',
					college_course_type: 'Undergraduate',
					social_security_number: '222333123',
					dod_id: '2222',
					affiliation: 'Army',
					benefits_number: '345',
					rank: '1',
					date_of_birth: '10/10/1997',
					active_duty_indicator: true,
					discover_account_no: "1111111",
					discover_account_type: 'Student Loan'
	});
});

app.post('/update', async (req, res) => {

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send("Loan created");
});

app.use(cors());
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
