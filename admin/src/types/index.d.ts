interface UserEvent {
	eventId: string;
    paymentRequired: boolean;
	eligible: boolean;
	isGroup: boolean;
	members: string[];
	payment: {
		status: string;
		transactionId: string;
		paymentImage: string;
		amount: number;
		verifierId: string;
	}
	physicalVerification: {
		status: boolean;
		verifierId: string;
	}
}

interface User {
    _id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	avatar: string;
	role: string;
	account: string[];
	schoolOrCollege: string;
    schoolName?: string;
	collegeName?: string;
	collegeClass?: string;
	schoolClass?: string;
	phoneNumber: string;
	isVerified: boolean;
	isBlocked: boolean;
	events: UserEvent[] | [];
	googleId: string;
}

interface UserResponse {
    success: boolean;
    user: User;
    token: string;
}

interface EventDetails {
	_id: string;
    title: string;
    subTitle?: string;
    description: string;
    category: string;
    participation: string;
    maxGroup?: number;
    isVisible: boolean;
    canRegister: boolean;
    externalRegistration: boolean;
    extrenalRegistrationLink?: string;
    externalLink?: string;
    registrationRequired: boolean;
    paymentRequired: boolean;
    amount?: number;
    eventDate: Date;
    venue?: string;
    deadline?: Date;
    image?: string;
    rules?: string[];
    backgroundImage?: string;
    eligibility?: {
        schoolOrCollege: string;
        collegeClass?: string;
        schoolClass?: string;
    }
    createdAt: Date;
    updatedAt: Date;
}

interface AllEventCarousel {
	_id: string;
    title: string;
    description: string;
    category: string;
    participation: string;
    backgroundImage?: string;
}

interface EventDetailsResponse {
	success: boolean;
	event: EventDetails;
}

interface AllEventDetailsResponse {
	success: boolean;
	events: AllEventCarousel[];
}