//demo data

export const DOCTORS = [
  {
    "doctor_id": 1,
    "email": "emily.horvath@example.com",
    "first_name": "Emily",
    "last_name": "Horvath",
    "specialization": "Cardiologist",
    "about": "Specializes in preventive cardiology and heart failure."
  },
  {
    "doctor_id": 2,
    "email": "daniel.kovacs@example.com",
    "first_name": "Daniel",
    "last_name": "Kovacs",
    "specialization": "Dermatologist",
    "about": "Focuses on chronic skin conditions and pediatric dermatology."
  },
  {
    "doctor_id": 3,
    "email": "anna.szabo@example.com",
    "first_name": "Anna",
    "last_name": "Szabo",
    "specialization": "Neurologist",
    "about": "Experienced in epilepsy and movement disorders."
  },
  {
    "doctor_id": 4,
    "email": "mark.fekete@example.com",
    "first_name": "Mark",
    "last_name": "Fekete",
    "specialization": "Orthopedic Surgeon",
    "about": "Performs joint replacement and sports injury surgeries."
  },
  {
    "doctor_id": 5,
    "email": "laura.nagy@example.com",
    "first_name": "Laura",
    "last_name": "Nagy",
    "specialization": "Cardiologist",
    "about": "Interventional cardiologist with cath lab experience."
  },
  {
    "doctor_id": 6,
    "email": "balint.toth@example.com",
    "first_name": "Balint",
    "last_name": "Toth",
    "specialization": "Endocrinologist",
    "about": "Treats diabetes, thyroid, and metabolic disorders."
  },
  {
    "doctor_id": 7,
    "email": "eszter.farkas@example.com",
    "first_name": "Eszter",
    "last_name": "Farkas",
    "specialization": "Pediatrician",
    "about": "Primary care for infants, children, and adolescents."
  },
  {
    "doctor_id": 8,
    "email": "marton.illes@example.com",
    "first_name": "Marton",
    "last_name": "Illes",
    "specialization": "Pulmonologist",
    "about": "Manages asthma, COPD, and sleep apnea."
  },
  {
    "doctor_id": 9,
    "email": "katalin.barta@example.com",
    "first_name": "Katalin",
    "last_name": "Barta",
    "specialization": "Oncologist",
    "about": "Medical oncologist focused on breast cancer care."
  },
  {
    "doctor_id": 10,
    "email": "andras.kiss@example.com",
    "first_name": "Andras",
    "last_name": "Kiss",
    "specialization": "Cardiologist",
    "about": "Special interest in arrhythmias and cardiac imaging."
  }
];


export const PATIENTS = [
  {
    "patient_id": 1,
    "first_name": "Laura",
    "last_name": "Nagy",
    "phone": "+36 30 442 5566",
    "email": "laura.nagy@example.com"
  },
  {
    "patient_id": 2,
    "first_name": "Mate",
    "last_name": "Farkas",
    "phone": "+36 70 889 1122",
    "email": "mate.farkas@example.com"
  },
  {
    "patient_id": 3,
    "first_name": "Eszter",
    "last_name": "Barta",
    "phone": "+36 20 332 7755",
    "email": "eszter.barta@example.com"
  },
  {
    "patient_id": 4,
    "first_name": "Adam",
    "last_name": "Kiss",
    "phone": "+36 70 998 4411",
    "email": "adam.kiss@example.com"
  },
  {
    "patient_id": 5,
    "first_name": "Reka",
    "last_name": "Szabo",
    "phone": "+36 30 552 0034",
    "email": "reka.szabo@example.com"
  },
  {
    "patient_id": 6,
    "first_name": "Bence",
    "last_name": "Varga",
    "phone": "+36 20 335 7756",
    "email": "bence.varga@example.com"
  },
  {
    "patient_id": 7,
    "first_name": "Nora",
    "last_name": "Molnar",
    "phone": "+36 70 443 6654",
    "email": "nora.molnar@example.com"
  },
  {
    "patient_id": 8,
    "first_name": "Oliver",
    "last_name": "Toth",
    "phone": "+36 30 667 2299",
    "email": "oliver.toth@example.com"
  },
  {
    "patient_id": 9,
    "first_name": "Julia",
    "last_name": "Nemes",
    "phone": "+36 70 712 4577",
    "email": "julia.nemes@example.com"
  },
  {
    "patient_id": 10,
    "first_name": "Aaron",
    "last_name": "Horvath",
    "phone": "+36 20 922 1122",
    "email": "aaron.horvath@example.com"
  }
];

//Patient page
export const MOCK_PATIENTS_ACCOUNTS = {
  1: {
    patient_id: 1,
    firstName: "Laura",
    lastName: "Nagy",
    phone: "+36 30 442 5566",
    email: "laura.nagy@example.com",
    dob: "1990-05-15",
    medicalCard: "TAJ-123-456-789",
    insurance: "INS-2024-001",
    address: {
      line1: "Kossuth Lajos utca 42",
      line2: "3rd Floor, Apt 12",
      city: "Debrecen",
      state: "Hajdú-Bihar",
      postal: "4032",
      country: "Hungary",
    }
  },
  2: {
    patient_id: 2,
    firstName: "Mate",
    lastName: "Farkas",
    phone: "+36 70 889 1122",
    email: "mate.farkas@example.com",
    dob: "1985-08-22",
    medicalCard: "TAJ-987-654-321",
    insurance: "INS-2024-002",
    address: {
      line1: "Piac utca 15",
      line2: "",
      city: "Budapest",
      state: "Budapest",
      postal: "1052",
      country: "Hungary",
    }
  },
  3: {
    patient_id: 3,
    firstName: "Eszter",
    lastName: "Barta",
    phone: "+36 20 332 7755",
    email: "eszter.barta@example.com",
    dob: "1992-11-30",
    medicalCard: "TAJ-456-789-123",
    insurance: "INS-2024-003",
    address: {
      line1: "Aradi vértanúk tere 8",
      line2: "Building B",
      city: "Szeged",
      state: "Csongrád-Csanád",
      postal: "6720",
      country: "Hungary",
    }
  }
};

export const EU_COUNTRIES = [
  "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus",
  "Czech Republic", "Denmark", "Estonia", "Finland", "France",
  "Germany", "Greece", "Hungary", "Ireland", "Italy",
  "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands",
  "Poland", "Portugal", "Romania", "Slovakia", "Slovenia",
  "Spain", "Sweden"
];

// Helper to get patient account data
export function getPatientAccount(patientId) {
  // First check localStorage for saved data
  const saved = localStorage.getItem(`patient_${patientId}`);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Error parsing saved patient data:', e);
    }
  }
  // Otherwise return mock data
  return MOCK_PATIENTS_ACCOUNTS[patientId] || null;
}

// Helper to save patient account data
export function savePatientAccount(patientId, data) {
  // For demo: save to localStorage
  // Later: replace with API call
  localStorage.setItem(`patient_${patientId}`, JSON.stringify(data));
  console.log('Saved patient data:', data);
  
  // Simulate API call
  return Promise.resolve({ success: true });
}

export const APPOINTMENTS = [
  {
    "a_id": 201,
    "doctor_id": 1,
    "patient_id": 1,
    "appointment_status": "upcoming",
    "appointment_date": "Mon, Dec 01, 2025",
    "appointment_time": "10:15",
    "description": "Annual cardiology check-up.",
    "room": "Budapest Clinic B, Room 12",
    "patient_state": "follow-up"
  },
  {
    "a_id": 202,
    "doctor_id": 1,
    "patient_id": 2,
    "appointment_status": "cancelled",
    "appointment_date": "Wed, Nov 26, 2025",
    "appointment_time": "14:40",
    "description": "",
    "room": "Debrecen Clinic A, Room 3",
    "patient_state": "first visit"
  },
  {
    "a_id": 203,
    "doctor_id": 1,
    "patient_id": 3,
    "appointment_status": "completed",
    "appointment_date": "Thu, Nov 20, 2025",
    "appointment_time": "08:00",
    "description": "Bloodwork review.",
    "room": "Szeged Health Center, Room 5",
    "patient_state": "follow-up"
  },
  {
    "a_id": 204,
    "doctor_id": 1,
    "patient_id": 4,
    "appointment_status": "upcoming",
    "appointment_date": "Fri, Dec 05, 2025",
    "appointment_time": "09:30",
    "description": "",
    "room": "Győr Medical Center, Room 9",
    "patient_state": "first visit"
  },
  {
    "a_id": 205,
    "doctor_id": 1,
    "patient_id": 5,
    "appointment_status": "completed",
    "appointment_date": "Tue, Nov 18, 2025",
    "appointment_time": "15:45",
    "description": "Dermatology follow-up.",
    "room": "Budapest Clinic C, Room 4",
    "patient_state": "follow-up"
  },
  {
    "a_id": 206,
    "doctor_id": 1,
    "patient_id": 6,
    "appointment_status": "cancelled",
    "appointment_date": "Mon, Nov 24, 2025",
    "appointment_time": "11:00",
    "description": "Patient cancelled due to illness.",
    "room": "Debrecen Clinic A, Room 1",
    "patient_state": "first visit"
  },
  {
    "a_id": 207,
    "doctor_id": 1,
    "patient_id": 7,
    "appointment_status": "upcoming",
    "appointment_date": "Thu, Dec 12, 2025",
    "appointment_time": "13:30",
    "description": "",
    "room": "Szeged Health Center, Room 3",
    "patient_state": "follow-up"
  },
  {
    "a_id": 208,
    "doctor_id": 1,
    "patient_id": 8,
    "appointment_status": "completed",
    "appointment_date": "Sat, Nov 22, 2025",
    "appointment_time": "09:00",
    "description": "Neurology test results discussion.",
    "room": "Debrecen Clinic B, Room 8",
    "patient_state": "first visit"
  },
  {
    "a_id": 209,
    "doctor_id": 1,
    "patient_id": 9,
    "appointment_status": "cancelled",
    "appointment_date": "Tue, Nov 25, 2025",
    "appointment_time": "10:00",
    "description": "",
    "room": "Budapest Clinic A, Room 6",
    "patient_state": "follow-up"
  },
  {
    "a_id": 210,
    "doctor_id": 1,
    "patient_id": 10,
    "appointment_status": "upcoming",
    "appointment_date": "Fri, Dec 20, 2025",
    "appointment_time": "16:45",
    "description": "",
    "room": "Győr Medical Center, Room 2",
    "patient_state": "first visit"
  }
];


// Function to generate availability slots for each doctor
export function getAvailabilityForDoctor(doctorId) {
  const allSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", "17:00"
  ];
  
  // Create variation based on doctor ID to make demo more realistic
  return allSlots.map((time, index) => ({
    time,
    // Make different slots unavailable for different doctors
    available: (index + doctorId) % 4 !== 0
  }));
}

// Helper function to get appointments with patient details
export function getAppointmentsWithPatients(doctorId) {
  return APPOINTMENTS
    .filter(apt => apt.doctor_id === doctorId)
    .map(apt => {
      const patient = PATIENTS.find(p => p.patient_id === apt.patient_id);
      return {
        ...apt,
        patient: patient || null
      };
    });
}


//Doctor page
// Generate time slots
export const TIME_SLOTS = {
  morning: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"],
  afternoon: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"]
};

// Helper to generate a week starting from a given date
export function getWeekDates(startDate) {
  const dates = [];
  const start = new Date(startDate);
  
  // Find Monday of the week
  const day = start.getDay();
  const diff = start.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(start.setDate(diff));
  
  // Generate 5 weekdays (Mon-Fri)
  for (let i = 0; i < 5; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    
    const iso = date.toISOString().split('T')[0];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    
    dates.push({
      iso,
      dayName: dayNames[date.getDay()],
      monthDay: `${monthNames[date.getMonth()]} ${date.getDate()}`
    });
  }
  
  return dates;
}

// Get current week
export function getCurrentWeek() {
  return getWeekDates(new Date());
}

// Mock doctor availability (for demo - will come from backend later)
export function getMockDoctorAvailability(doctorId) {
  // Return empty object - doctor hasn't set availability yet
  // Structure: { "2025-10-13": { "09:00": true, "09:30": false, ... } }
  return {};
}

//patient page
export const PATIENT_APPOINTMENTS = {
  1: [
    {
      appointment_id: "APT001",
      patient_id: 1,
      doctor_id: 7,
      date: "Tue, Nov 18, 2025",
      time: "09:30",
      room: "Debrecen Clinic A, Room 3",
      appointment_status: "upcoming"
    },
    {
      appointment_id: "APT002",
      patient_id: 1,
      doctor_id: 6,
      date: "Wed, Nov 19, 2025",
      time: "11:15",
      room: "Budapest Clinic B, Room 12",
      appointment_status: "completed"
    },
    {
      appointment_id: "APT003",
      patient_id: 1,
      doctor_id: 9,
      date: "Fri, Nov 21, 2025",
      time: "08:00",
      room: "Szeged Health Center, Room 5",
      appointment_status: "completed"
    },
    {
      appointment_id: "APT004",
      patient_id: 1,
      doctor_id: 10,
      date: "Mon, Nov 24, 2025",
      time: "16:45",
      room: "Győr Medical Center, Room 9",
      appointment_status: "completed"
    },
    {
      appointment_id: "APT005",
      patient_id: 1,
      doctor_id: 4,
      date: "Thu, Nov 27, 2025",
      time: "14:30",
      room: "Pécs Hospital, Room 7",
      appointment_status: "completed"
    },
    {
      appointment_id: "APT006",
      patient_id: 1,
      doctor_id: 2,
      date: "Fri, Nov 28, 2025",
      time: "10:00",
      room: "Szeged Clinic, Room 2",
      appointment_status: "completed"
    }
  ]
};

// Helper to get patient appointments with doctor details
export function getPatientAppointments(patientId) {
  const appointments = PATIENT_APPOINTMENTS[patientId] || [];
  
  return appointments.map(apt => {
    const doctor = DOCTORS.find(d => d.doctor_id === apt.doctor_id);
    return {
      ...apt,
      doctor: doctor ? {
        id: doctor.doctor_id,
        firstName: doctor.first_name,
        lastName: doctor.last_name,
        specialist: doctor.specialization
      } : null
    };
  });
}


