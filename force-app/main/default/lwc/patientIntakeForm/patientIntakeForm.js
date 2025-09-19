import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class PatientIntakeForm extends LightningElement {
    @track patientName = '';
    @track age = '';
    @track contact = '';
    @track symptoms = []; // This will store selected symptom values
    @track otherSymptoms = ''; // Add this missing property
    @track pulse = '';
    @track bp = '';
    @track preferredDate = '';
    @track urgencyLevel = 'Not Calculated';

    // Options for symptoms dropdown
    get symptomOptions() {
        return [
            { label: 'Fever', value: 'Fever' },
            { label: 'Chest Pain', value: 'Chest Pain' },
            { label: 'Headache', value: 'Headache' },
            { label: 'Shortness of Breath', value: 'Breathing' },
            { label: 'Accident / Injury', value: 'Injury' }
        ];
    }

    get urgencyClass() {
        if (this.urgencyLevel === 'High') return 'urgent-high';
        if (this.urgencyLevel === 'Medium') return 'urgent-medium';
        if (this.urgencyLevel === 'Low') return 'urgent-low';
        return '';
    }

    handleChange(event) {
        const field = event.target.dataset.id;
        
        // Special handling for symptoms (since combobox doesn't support multiple)
        if (field === 'symptoms') {
            // For single selection combobox, store as array for consistency
            this.symptoms = event.target.value ? [event.target.value] : [];
            this.calculateUrgency();
        } else {
            // Handle all other fields
            this[field] = event.target.value;
        }
    }

    calculateUrgency() {
        let score = 0;

        // Check symptoms array for scoring
        if (this.symptoms.includes('Chest Pain')) score += 3;
        if (this.symptoms.includes('Breathing')) score += 3;
        if (this.symptoms.includes('Injury')) score += 2;
        if (this.symptoms.includes('Fever')) score += 1;
        if (this.symptoms.includes('Headache')) score += 1;

        // Update urgency level based on score
        if (score >= 5) {
            this.urgencyLevel = 'High';
        } else if (score >= 3) {
            this.urgencyLevel = 'Medium';
        } else if (score > 0) {
            this.urgencyLevel = 'Low';
        } else {
            this.urgencyLevel = 'Not Calculated';
        }
    }

    handleSubmit() {
        // Enhanced validation
        if (!this.patientName) {
            this.showToast('Error', 'Please enter patient name', 'error');
            return;
        }
        
        if (!this.contact) {
            this.showToast('Error', 'Please enter contact number', 'error');
            return;
        }
        
        if (!this.symptoms.length && !this.otherSymptoms) {
            this.showToast('Error', 'Please select symptoms or describe other symptoms', 'error');
            return;
        }

        // Log form data for debugging
        console.log('Form Submitted:', {
            patientName: this.patientName,
            age: this.age,
            contact: this.contact,
            symptoms: this.symptoms,
            otherSymptoms: this.otherSymptoms,
            pulse: this.pulse,
            bp: this.bp,
            preferredDate: this.preferredDate,
            urgencyLevel: this.urgencyLevel
        });

        // Show success message
        this.showToast('Success', 'Form submitted successfully!', 'success');
        
        // Reset form after successful submission
        this.resetForm();
    }

    // Helper method to show toast notifications
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant, // 'success', 'error', 'warning', 'info'
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }

    // Reset form after submission
    resetForm() {
        this.patientName = '';
        this.age = '';
        this.contact = '';
        this.symptoms = [];
        this.selectedSymptom = '';
        this.otherSymptoms = '';
        this.pulse = '';
        this.bp = '';
        this.preferredDate = '';
        this.urgencyLevel = 'Not Calculated';
    }
}