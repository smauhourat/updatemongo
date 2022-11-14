const TripSchema = {
    user: {
        type: Object,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    itinerary: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    date: {
        type: Date
        //required: true 
    },
    duration: {
        type: String
    },
    price: {
        type: Number
    },
    location: {
        type: String,
        required: true
    },
    grading: {
        type: Number
    },
    quota: {
        type: Number
    },
    reservations: {
        type: Number
    },
    published: {
        type: Boolean,
        default: true
    },
    suggested_equipment: {
        type: String
    },
    images: [
        {
            url: {
                type: String
            },
            public_id: {
                type: String
            },
            width: {
                type: Number
            },
            height: {
                type: Number
            },
            format: {
                type: String
            },
            resource_type: {
                type: String
            },
            created_at: {
                type: Date
            },
            bytes: {
                type: Number
            }
        }
    ]
};

export default TripSchema;