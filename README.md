
# Problem Statement
In many Indian hospitals, emergency wards face overcrowding. Patients with minor issues and those with life-threatening conditions often wait in the same queue, causing delays for critical cases.
There is no simple pre-screening system to identify urgent patients early, and manual paperwork further slows down care.
# Proposed Solution
*Patient-First-Aid-Priority-App* is a Salesforce-based system that:
-  Lets patients or hospital staff log symptoms quickly through a custom Lightning Web Component (LWC).
- Calculates an urgency score and classifies cases as Low, Medium, or High.
- Automatically routes urgent cases to the right clinician using Flows.
- Triggers instant alerts and tasks for High-priority patients.
- Uses Agentforce AI to generate clinical notes and assist doctors with quick insights.
- Provides reports and dashboards to track emergency workloads and SLA compliance
# Use case diagram
<img width="1024" height="768" alt="UseCaseDiagram" src="https://github.com/user-attachments/assets/5867932c-792b-4676-8972-8c0fee44de21" />

# 2. Business Process Mapping

Step-by-step process flow:

- 1) Patient or staff logs symptoms via LWC intake form.
- 2) System calculates urgency score and identifies the relevant department (Gynecology, Cardiology, Orthopedics, General, Emergency, etc.).
- 3.  A Patient Case record is created in Salesforce with fields: Urgency Level + Department.
- 4.  Flow automation routes the case to the correct department queue/doctor.
- 5.  Urgent cases still trigger instant notifications + tasks.
- 6.  Clinician in that department reviews the case and (optionally) uses Agentforce AI to auto-generate a clinical note.
- 7.  Hospital Management tracks case distribution and SLA compliance via reports & dashboards.

# 3. Industry-Specific Use Case Analysis

## Scenario 1 – Reduce Manual Triage & Routing

As a hospital administrator,
I want patient intake and routing to be automated based on symptoms + urgency,
So that my staff no longer spend hours sorting cases manually, and patients reach the correct department faster.

✅ Business Value: Saves staff time, reduces operational errors, and improves hospital throughput.
## Scenario 2 – Real-Time Department Load Balancing

As a hospital operations manager,
I want a dashboard that shows patient load per department with urgency levels,
So that I can allocate more doctors/nurses to overloaded departments and ensure critical patients are prioritized.

✅ Business Value: Improves hospital efficiency, prevents resource bottlenecks, and supports data-driven staffing decisions.
## Scenario 3 – AI-Powered Clinical Documentation

As a clinician,
I want AI-generated clinical notes to summarize patient cases,
So that I reduce time spent on documentation and can see more patients in a day without burnout.

✅ Business Value: Increases doctor productivity, reduces administrative burden, and improves patient satisfaction.

## 📌 Product Backlog – Patient-First-Aid-Priority-App
**Epic 1: Patient Intake & Routing**

* User Story 1.1:
As a patient, I want to log my symptoms through a guided intake form, so that I don’t have to stand in a queue and I can prebook from home.

* Acceptance Criteria:
Intake form (LWC) captures name, age, contact, symptoms, vitals.
Symptom selection suggests department automatically.

* User Story 1.2:
As a hospital admin, I want cases to be automatically routed to the correct department queue, so that staff don’t waste time manually sorting patients.

* Acceptance Criteria:

Cases assigned to Cardiology, Gynecology, General, etc. based on rules.
High urgency cases marked clearly.

**Epic 2: Urgency Scoring & Prioritization**

* User Story 2.1:
As a clinician, I want to see urgency levels (Low, Medium, High) highlighted on patient cases, so that I can prioritize treatment.

* Acceptance Criteria:

Score computed based on selected symptoms/vitals.
Urgency displayed on case record & dashboard.

* User Story 2.2:
As hospital staff, I want urgent cases to trigger notifications and tasks automatically, so that doctors are alerted in time.

* Acceptance Criteria:

Flow automation sends email/SMS/Chatter alert.
Task created for assigned clinician.

**Epic 3: Agentforce AI Assistance**

User Story 3.1:
As a clinician, I want AI-generated clinical notes, so that I save time on manual documentation.

Acceptance Criteria:

Agentforce summarizes patient record details.
Notes stored in Clinical_Note__c field.

* User Story 3.2:
As a clinician, I want an AI assistant to answer queries like “Show today’s high urgency cases”, so that I can quickly assess my workload.

* Acceptance Criteria:

Agentforce responds contextually using patient case data.
Results displayed in LWC panel or modal.

**Epic 4: Hospital Management & Analytics**

* User Story 4.1:
As a hospital operations manager, I want dashboards showing patient load by department and urgency, so that I can allocate resources effectively.

* Acceptance Criteria:

Reports track patients by department, urgency level, SLA compliance.
Dashboard components update in real-time.

* User Story 4.2:
As a hospital administrator, I want to analyze historical patient intake trends, so that I can plan staffing and facilities better.

* Acceptance Criteria:

Reports exportable (CSV/PDF).
Filtering by department, urgency, time period.
