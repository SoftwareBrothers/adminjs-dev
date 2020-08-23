## Validate form properties

AdminBro by default validates properties based on rules defined by the database schema. But sometimes you might need to adjust it to your particular needs.

### How validation works in AdminBro

AdminBro validates fields on the backend and sends errors back to the react frontend.

Information about the errors is send inside the {@link RecordJSON} object in the {@link RecordActionResponse}.

**Example**

so this might be the standard output ({@link RecordActionResponse}) of an `edit` action:

```
{
  record: { // RecordJSON
    id: 123123123,
    title: 'Your mother',
    params: {name: ''},
    populated: {...},
    recordActions: [...],
    bulkActions: [...],
    errors: { // validation errors goes here
      name: {
        message: 'cannot be blank'
      }
    }
  }
}
```

Frontend sees that {@link RecordJSON} has errors for property `name` and it prints them below the "name" input.

### Custom validations with ValidationError

The most versatile way of adding custom validation errors is by throwing {@link ValidationError} in either: 

- {@link Action#before before action hook},
- {@link Action#after after action hook} or in the
- {@link Action#handler action handler}

You can use your custom validator like [ClassValidator](https://github.com/typestack/class-validator) or validate data yourself.

This is an example of throwing validation error in `before` `new` action hook:

```
const resourceOptions = {
  actions: {
    new: {
      before: async (request) => {
        const {method, payload} = request
        if (method === 'post' && payload.name === 'forbidden') {
          throw new ValidationError({
            name: {
              message: 'cannot be "forbidden"',
            },
          }, {
            message: 'something wrong happened',
          })
        }
        return request
      }
    }
  }
}
```

when the user gives "forbidden name" in the input for `name` property - it will trigger a validation error.

{@link ValidationError} takes 2 arguments:

- map with errors for each field
- `notice` error which will appear on the top of the UI

They are optional so you can show only one of them or both.

The downside of this approach is that it clears all the other validation errors. So if database adapter spotted problems and you threw an error in after hook - those previous errors won't get to the response.

### Manually filling response with validation errors

Sometimes you might want to manually adjust the errors returned by the database adapter. You can do this manually by modifying the response.

As I wrote in the beginning errors are stored inside the {@link RecordJSON} object. So in order to change that - you have to modify it.

This is an example of copying error message from one property: 'encryptedPassword' to another 'password' in after action hook:

```
const resourceOptions = {
  actions: {
    new: {
      after: async (response) => {
        if (response.record && response.record.errors && response.record.errors.encryptedPassword) {
          response.record.errors.password = response.record.errors.encryptedPassword;
        }
        return response;
      };
    }
  }
}
```

(You can take a look at this [video](https://www.youtube.com/watch?v=wOSPDtvJcyQ&feature=youtu.be) where this particular example is used).