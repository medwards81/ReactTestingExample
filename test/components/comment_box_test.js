import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(CommentBox);
	});

    it('has the correct class', () => {
        expect(component).to.have.class('comment-box');
    });
    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

	describe('entering some text', () => {
		let comment = 'new comment';
		beforeEach(() => {
			component.find('textarea').simulate('change', comment);
		});

		it('shows text in the textarea', () => {
			expect(component.find('textarea')).to.have.value(comment);
		});

		it('when submitted, clears the input', () => {
			component.simulate('submit'); // our component's top level element is a form, so let's submit it!
			expect(component.find('textarea')).to.have.value('');
		});
	});

});
